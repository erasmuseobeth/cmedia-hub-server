const express = require('express');
const router = express.Router();
const storageService = require('../../services/storageService');
const mediaController = require('../controllers/mediaController');
const { validateRequestParams } = require('../../middleware/validateRequestParams');

// Define routes using router.route()

// /api/media/thumbnails/:thumbnailFile
router.route('/thumbnails/:thumbnailFile')
  .get(mediaController.getMediaThumbnail);

// /api/media/stream/:id
router.route('/stream/:id')
  .get(mediaController.streamMedia);

// /api/media/search
router.route('/search')
  .get(mediaController.searchMedia);

// /api/media/upload
router.route('/upload')
  .get((req, res) => {
    // Display a form for file uploads
    console.log(req.method, req.url);
    res.send(`
      <form action="/api/media" method="post" enctype="multipart/form-data">
        <h1>SELECT FILES TO UPLOAD<h1>
        <input type="file" name="files" multiple />
        <br/>
        <br/>
        <button type="submit">Upload</button>
      </form>`
    );
  });
  
// /api/media/:id Retrieve a specific media metadata and information about a media file
router.route('/:id/thumbnail')
.get(validateRequestParams(['id']), mediaController.updateMediaThumbnailForm)
.put(validateRequestParams(['id']),mediaController.updateMediaThumbnail)

// /api/media/:id Retrieve a specific media metadata and information about a media file
router.route('/:id')
  .get(validateRequestParams(['id']), mediaController.getMedia)
  .put(validateRequestParams(['id']),mediaController.updateMedia)
  .delete(validateRequestParams(['id']), mediaController.deleteMedia);

// /api/media List all available media files
router.route('/')
  .get(validateRequestParams(
    ['title', 'id', 'description', 'tags', 'size','user_id', 'channel_id', 'duration', 'maxResult',
     'category', 'query', 'filter', 'orderby', 'rating','publishedAt', 'publishedBefore', 'publishedAfter'] ),mediaController.listMedia)
  .post(storageService.saveMediaToStorage.array('files'), mediaController.createMedia)
  .put(validateRequestParams(['id']), mediaController.updateMedia)
  .delete(validateRequestParams(['id']), mediaController.deleteMedia);

module.exports = router;
