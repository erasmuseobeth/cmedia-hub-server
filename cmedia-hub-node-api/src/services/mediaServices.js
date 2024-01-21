const Media = require('../database/models/media');
const path = require('path');
const { mapMimeTypeToMediaType, getMediaDurationAndThumbnails, getHumanReadableSize,
  getHumanReadableDuration, } = require('./utils');
const ffmpeg = require('fluent-ffmpeg');
const { Console } = require('console');


const mediaService = {
  async saveMediaMetadata(mediaDataArray) {
    try {
      const resolvedMediaDataArray = await Promise.all(mediaDataArray);
  
      const createdMedia = await Media.sequelize.transaction(async (t) => {
        const result = await Media.bulkCreate(resolvedMediaDataArray, { transaction: t });
        return result.map((media) => ({
          ...media.toJSON(),
          id:media.id,
          size:getHumanReadableSize(media.size),
          duration:getHumanReadableDuration(media.duration),
          thumbnail: `http://localhost:9000/api/media/thumbnails/${media.thumbnail ? media.thumbnail : 'default_media_thumbnail.png'}`,
          updatedAt: undefined,
          publishedAt: media.createdAt, // Rename createdAt to publishedAt
          createdAt: undefined, // Remove the updatedAt property
          // privacy:media.privacy,
        }));
      });
  
      return createdMedia;
    } catch (error) {
      console.error('Error Saving Media Metadata to Database:', error);
      throw new Error('Failed to save media metadata');
    }
  },  
  async uploadMedia(files) {
    try {
      if (!files || files.length === 0) {
        throw new Error('>>>>>>>>>>>>>>#Please choose a file to upload.>>>>>>>>>>>>>>#');
      }
  
      const user = false;
      // Use map to create an array of metadata objects with resolved thumbnail promises
      const mediaDataArray = await Promise.all(files.map(async (file) => {
        const { id, originalname, mimetype, size } = file;
        const { duration, thumbnail } = await getMediaDurationAndThumbnails(file);

        return {
          id: path.parse(file.filename).name,
          title: path.parse(originalname).name,
          description: 'N/A',
          format: path.extname(originalname),
          type: mapMimeTypeToMediaType(mimetype),
          size: size,
          channel_id: user ? user.id : 'public',
          duration: duration,
          thumbnail: thumbnail,
        };
      }));
      const savedMedia = await this.saveMediaMetadata(mediaDataArray); // Await the asynchronous operation
      // console.log('saved media files:', savedMedia);
      return savedMedia;
    } catch (error) {
      console.error('>>>>>>>>>>>>>>#Error processing Uploaded files:', error, '>>>>>>>>>>>>>>#');
      throw error; // Propagate the error for handling in the calling code if needed
    }
  },                                          
  async getMediaUrlById(id) {
    try {
      // Find the media by ID
      const media = await Media.findByPk(id);

      // Check if media exists
      if (!media) {
        return res.status(404).send('Media not found');
      }


      // Replace this with the actual property that holds the file path in your Media model
      return media.url;
    } catch (error) {
      console.error(`>>>>>>>>>>>>>>#Error fetching media  Url with ID ${id} from the database:`, error, '>>>>>>>>>>>>>>#');
      throw new Error('>>>>>>>>>>>>>>#Failed to retrieve media Url by ID>>>>>>>>>>>>>>#');
    }
  },
};

module.exports = mediaService;