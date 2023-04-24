const express = require('express');
const { uploadProfile, uploadBackgrounds, uploadPosts } = require('../../controllers/storage/storage.controller');
const multer = require('multer');
const upload = multer().single('image');

storageRouter = express.Router();

storageRouter.post('/uploadProfile',upload, uploadProfile);

storageRouter.post('/uploadBackground',upload, uploadBackgrounds);


storageRouter.post('/uploadPosts',upload, uploadPosts);

module.exports = { storageRouter }