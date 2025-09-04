const express = require('express');
const {
  getHeaderImage,
  createHeaderImage,
  updateHeaderImage,
} = require('../controllers/headerImage');
const { singleImage } = require('../utils/fileUpload');
const router = express.Router();

router.route('/').get(getHeaderImage).post(singleImage, createHeaderImage);
router.route('/:id').get(getHeaderImage).patch(singleImage, updateHeaderImage);
module.exports = router;
