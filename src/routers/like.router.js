const express = require('express');
const { isLike, addLike, unLike } = require('../controllers/like.controller');

LikeRouter = express.Router();


LikeRouter.post("/islike", isLike)

LikeRouter.post("/addLike", addLike)

LikeRouter.post("/unLike", unLike)

module.exports = { LikeRouter }