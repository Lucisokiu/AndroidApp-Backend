const express = require('express');
const { loginRouter } = require('./login.routers');
const { userRouter } = require('./users.routers');
const { createauth } = require('./createAuth.router');
const { FollowRouter } = require('./follow.router');
const { postRouter } = require('./post.router');
const { favouriteRouter } = require('./favourite.router');
const { storageRouter } = require('./storages/storage.route');
const { NotifiRouter } = require('./notifications.router');
const { LikeRouter } = require('./like.router');
const { commentRouter } = require('./comment.router');

const router = express.Router();

router.use('/api', userRouter)

router.use('/api', createauth)

router.use('/api', loginRouter)

router.use('/api', createauth)

router.use('/api', FollowRouter)

router.use('/api', postRouter)

router.use('/api', favouriteRouter)

router.use('/api', storageRouter)

router.use('/api', NotifiRouter)

router.use('/api', LikeRouter)

router.use('/api', commentRouter)


module.exports = router