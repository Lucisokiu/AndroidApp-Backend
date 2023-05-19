const express = require('express');
const { getNotifi, addNotifi } = require('../controllers/notifications.controller');
NotifiRouter = express.Router();


NotifiRouter.post("/getNotifi", getNotifi);

NotifiRouter.post("/addNotifi", addNotifi);


module.exports = { NotifiRouter }