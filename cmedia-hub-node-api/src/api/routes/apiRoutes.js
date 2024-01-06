const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController'); 


router.get('/', apiController.home);
// router.post('/', apiController.createMedia);



module.exports = router;