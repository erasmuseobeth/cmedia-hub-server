// const MediaStreamingService = require('../../services/mediaStreamingService');
// const { mediaUploadProcessingService } = require('../../services/mediaUploadService');
const storageService = require('../../services/storageService');
const mediaService = require('../../services/mediaServices.js');
const { getContentType, getHumanReadableSize, getHumanReadableDuration, } = require('../../services/utils');
const APIResponse = require('../../middleware/APIResponse');
const Media = require('../../database/models/media');
const buildWhereClause = require('../../database/searchAndFilterClause.js');

const { Op } = require("sequelize");
const fs = require('fs');
const { promises: fsPromises } = require('fs');
const { createReadStream, stat } = require('fs');
const { createGzip } = require('zlib');
const { promisify } = require('util');
const { pipeline } = require('stream');
const pipelineAsync = promisify(pipeline);
const statAsync = promisify(stat);
const path = require('path');
const mime = require('mime-types');
const { v4: uuidv4 } = require('uuid');
const access = promisify(fs.access);




const mediaController = {
   // mediaController.js
    listMedia : async (req, res) => {
      try {
        const queryParams = req.query;
        const whereClause = buildWhereClause(queryParams);

        // Example: Querying the Media model using Sequelize
        const allMedia = await Media.findAll({
          where: whereClause,
          // Add more options as needed (e.g., order, limit, etc.)
        });
        // Map the result to include only necessary information
        const mediaList = allMedia.map((media) => ({
          id: media.id,
          title: media.title,
          description: media.description,
          type: media.type,
          size:getHumanReadableSize(media.size),
          thumbnail:'http://localhost:9000/api/media/thumbnails/' + media.thumbnail,
          duration: getHumanReadableDuration(media.duration),
          channel_id: media.channel_id,
          format: media.format,
          publishedAt: media.createdAt,
        }));
    // Send the media list as a response
    res.json(APIResponse.success({ status:200, data:mediaList, }));
  } catch (error) {
    console.error('Error:', error);
    // res.status(500).json({ error: 'Internal Server Error' });
    res.json(APIResponse.error({ status:500, message:'Internal Server Error', details:[{}]}));
  }
    },
    createMedia: async (req, res) => {
      try {     
          if (!req.files || req.files.length === 0) {
            // return res.status(400).send('Please a choose file to Upload.');
          return res.json(APIResponse.error({ status:500, message:'Please choose a file to Upload', errors:[{}]}));
          }
          const uploadResult = await mediaService.uploadMedia(req.files);
          res.json(APIResponse.success({ status:200, message:'Files uploaded successfully', data:uploadResult,}));
        } catch (error) {
          console.error('Error Failed to Upload FIles,:', error);
          res.json(APIResponse.error({ status:500, message:'Internal Server Error', details:[{}]}));
      }
    },
    getMedia: async (req, res) => {
      const { id } = req.params;
      try {
        const media = await Media.findByPk(id);

        if (!media) {
          // return res.status(404).send('Media not found');
          return res.json(APIResponse.error({ status:404, message:'Media not Found', details:[{}]}));

        }

        // Assuming you want to send the media object as a JSON response
        res.json(APIResponse.success({ status:200, data:media }));
      } catch (error) {
        console.error('Error: Failed to retrieve media:', error);
        // res.status(500).send('Internal Server Error.');
        res.json(APIResponse.error({ status:500, message:'Internal Server Error', details:[{}]}));

      }
    },
    updateMedia: async (req, res) => {
      const { id } = req.params;
      const updatedFields = req.body;
      try {
        // Find the media by ID
        const media = await Media.findByPk(id);
        // Check if media exists
        if (!media) {
          // return res.status(404).send('Media not found');
          return res.json(APIResponse.error({ status:404, message:'Media not Found', details:[{}]}));

        }
        // Update the media object with the new values dynamically
        await media.update(updatedFields);
        // Save the updated media object
        await media.save();
        // Respond with the updated media object
        res.json(APIResponse.success({ status:200, data:media }));

      } catch (error) {
        console.error('Error: Failed to update media:', error);
        // res.status(500).send('Internal Server Error.');
        res.json(APIResponse.error({ status:500, message:'Internal Server Error', details:[{}]}));

      }
    },
    deleteMedia: async (req, res) => {
   
      const { id } = req.query;
    
      try {
        // Find the media by ID
        const media = await Media.findByPk(id);
    
        // Check if media exists
        if (!media) {
          return res.json(APIResponse.error({ status: 404, message: 'Media not Found', details: [{}] }));
        }
    
        // Retrieve the file URL from the media object
        const fileUrl = media.url;
    
        // Delete the media from storage first
        await storageService.deleteMediaFromStorage(fileUrl);
    
        // Delete the media from the database
        await media.destroy();
    
        // Respond with 204 No Content for successful deletion
        res.status(204).send('File deleted successfully');
      } catch (error) {
        res.json(APIResponse.error({ status: 500, message: 'Internal Server Error', details: [{}] }));
      }
    },
    searchMedia : async (req, res) => {
      try {
        const queryParams = req.query;

        // Check if queryParams is empty
        if (Object.keys(queryParams).length === 0) {
          return res.json(APIResponse.error({ status: 400, message: 'Empty Query Strings', details: [{}] }));
        }

        // Construct a Sequelize where clause based on queryParams
        const whereClause = buildWhereClause(queryParams);

        // Example: Perform the Sequelize find operation with the constructed where clause and specified attributes
        const result = await Media.findAll({
          where: whereClause,
          // Add more options as needed (e.g., order, limit, etc.)
        });

        res.json(APIResponse.success({
          message: 'Searching and filtering media',
          queryParams: queryParams,
          data: result,
        }));
      } catch (error) {
        console.error(error);
        res.json(APIResponse.error({ status: 500, message: 'Internal Server Error', details: [{}] }));
      }
    },
    streamMedia: async (req, res) => {
      try {
        const { id } = req.params;

        // Find the media by ID
        const media = await Media.findByPk(id);

        // Check if media exists
        if (!media) {
          // return res.status(404).send('Media not found');
          return res.json(APIResponse.error({ status:404, message:'Media not found', details:[{}]}));

        }
        const mediaPath = path.join(__dirname, '..', '..', '..', media.id, media.format);
        // Get file stats
        const stat = fs.statSync(mediaPath);
        const fileSize = stat.size;
        // Get the range of bytes requested by the client
        const range = req.headers.range || 'bytes=0-';
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunkSize = end - start + 1;
        // Determine content type based on file extension
        const fileExtension = path.extname(mediaPath).toLowerCase();
        const contentType = getContentType(fileExtension);
        // Create a read stream for the specified range
        const fileStream = fs.createReadStream(mediaPath, { start, end });
        // Set response headers
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize,
          'Content-Type': contentType,
        };
        // Send a partial content response (206) with headers
        res.writeHead(206, head);
        // Pipe the file stream to the response
        fileStream.pipe(res);
      } catch (error) {
        res.json(APIResponse.error({ status:500, message:'Internal Server Error', details:[{}]}));

      }
    },
    getMediaThumbnail: async (req, res) => {
        try {
          const { thumbnailFile } = req.params;
          const defaultThumnailFile = '/default_media_thumbnail.png'
      
          // Adjust the baseThumbnailPath based on your project structure
          const requestedThumbnailPath = path.join(__dirname, '..', '..', '..', 'media_files', 'thumbnails', thumbnailFile);
          const defaultThumbnailPath = path.join(__dirname, '..', '..', '..', 'media_files', 'thumbnails', defaultThumnailFile);
          try {
            // Check if the requested thumbnail file exists
            await access(requestedThumbnailPath);
      
            // Send the requested thumbnail file as a response
            res.sendFile(requestedThumbnailPath);
          } catch (error) {
            // If the requested thumbnail file doesn't exist or there is an error, send the default thumbnail
            res.sendFile(defaultThumbnailPath);
          }
        } catch (error) {
          res.json(APIResponse.error({ status:500, message:'Internal Server Error', details:[{}]}));
        }
    },   
    updateMediaThumbnail : async (req, res) => {
      try {
        const { id } = req.params;

        // Check if the request contains a file
        if (!req.files || Object.keys(req.files).length === 0) {
          return res.json(APIResponse.error({ status: 400, message: 'No file provided', details: [{}] }));
        }

        const thumbnailFile = req.files.thumbnail; // Assuming 'thumbnail' is the name attribute in the form

        // Find the media by ID
        const media = await Media.findByPk(id);

        // Check if media exists
        if (!media) {
          return res.json(APIResponse.error({ status: 404, message: 'Media not Found', details: [{}] }));
        }

        // Construct the new thumbnail filename (e.g., thumb123.jpg)
        const newThumbnailFileName = `thumb${id}${path.extname(thumbnailFile.name)}`;

        // Path to the directory where thumbnails are stored
        const thumbnailDir = path.join(__dirname, '../thumbnails'); // Adjust the path as needed

        // Path to the new thumbnail file
        const newThumbnailPath = path.join(thumbnailDir, newThumbnailFileName);

        // Write the thumbnail file to the thumbnail directory
        await fs.writeFile(newThumbnailPath, thumbnailFile.data);

        // Update the thumbnail field in the database with the new filename
        media.thumbnail = newThumbnailFileName;

        // Save the updated media
        await media.save();

        // Return the updated media resource
        res.json(APIResponse.success({
          message: 'Thumbnail updated successfully',
          data: media,
        }));
      } catch (error) {
        console.error('Error: Failed to update thumbnail:', error);
        res.json(APIResponse.error({ status: 500, message: 'Internal Server Error', details: [{}] }));
      }
    },
    updateMediaThumbnailForm : async (req, res) => {
      const {id} = req.params
        res.send(`
          <form action="/api/media/${id}/thumbnail" method="post" enctype="multipart/form-data">
            <h1>SELECT MEDIA THUMBNAIL TO UPLOAD<h1>
            <input type="file" name="thumbnailFile" />
            <br/>
            <br/>
            <button type="submit">Upload</button>
          </form>`
        );
    },
};

  module.exports = mediaController;
  



  