const expres = require("express");
const { getComment, CommentCount } = require("../controllers/comment.controller");
const commentRouter = expres.Router();

commentRouter.post("/getComment", getComment);

commentRouter.post("/commentCount", CommentCount);

module.exports = { commentRouter }
