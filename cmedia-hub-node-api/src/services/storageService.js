// storageService.js

const fs = require('fs').promises;
const path = require('path');
const multer = require('multer');
const { getDestinationDirectory } = require('./utils'); // Assuming you have a utility file
const Media = require('../database/models/media'); // Assuming you have a Media model
const uuid = require('uuid'); // Import the uuid module

// Multer Configuration
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const mediaFilesDirectory = './media_files/' + getDestinationDirectory(file.mimetype) + 's';
    callback(null, mediaFilesDirectory);
  },
  filename: function (req, file, callback) {
    // Use uuid.v4() to generate a unique filename
    const uniqueFilename = uuid.v4() + path.extname(file.originalname);
    callback(null, uniqueFilename);
  },
});

const saveMediaToStorage = multer({ storage: storage });
const deleteMediaFromStorage = async (fileUrl) => {
  try {
    // Construct the file path based on the file URL
    const filePath = path.resolve(fileUrl);
    console.log(`>>>>>>>>>>>>>>#Deleting file media-url: ${filePath} >>>>>>>>>>>>>>#`);


    // Check if the file exists before attempting to delete
    const fileExists = await fs.access(filePath).then(() => true).catch(() => false);

    if (fileExists) {
      // Delete the file
      await fs.unlink(filePath);
      console.log(`>>>>>>>>>>>>>>#File deleted: ${filePath}>>>>>>>>>>>>>>#`);
    } else {
      console.log(`>>>>>>>>>>>>>>#File not found: ${filePath}>>>>>>>>>>>>>>#`);
    }
  } catch (error) {
    console.error('>>>>>>>>>>>>>>#Error: Failed to delete file from storage:', error, '>>>>>>>>>>>>>>#');
    throw error; // Propagate the error to the calling function
  }
};

module.exports = {
  saveMediaToStorage,
  deleteMediaFromStorage,
};
