const express = require('express');
const { Login } = require('../controllers/login.controller');
loginRouter = express.Router();


loginRouter.post('/Login', Login);

module.exports = { loginRouter }
