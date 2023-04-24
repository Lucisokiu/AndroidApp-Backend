const express = require('express');
const { getNotifi } = require('../controllers/notifications.controller');
NotifiRouter = express.Router();


NotifiRouter.post("/getNotifi", getNotifi);


module.exports = { NotifiRouter }