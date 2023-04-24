const express = require('express');
const { Follow, Following, Followers, unFollow, addFollow } = require('../controllers/follow.controller');
FollowRouter = express.Router();


FollowRouter.post('/Follow', Follow);


FollowRouter.post('/Follow/following', Following);

FollowRouter.post('/Follow/followers', Followers);

FollowRouter.post('/Follow/unFollow', unFollow);

FollowRouter.post('/Follow/addFollow', addFollow);


module.exports = { FollowRouter }
