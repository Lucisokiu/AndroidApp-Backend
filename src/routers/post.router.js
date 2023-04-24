const express = require('express');
const { Post, PostDetail, PostCount, NewPost } = require('../controllers/posts.controller');
postRouter = express.Router();


postRouter.get('/Posts', Post);

postRouter.post('/PostDetail', PostDetail);

postRouter.get('/PostCount', PostCount);

postRouter.post('/NewPost', NewPost);


module.exports = { postRouter }
