const express = require('express');
const { createAuth } = require('../controllers/createAuth.controller');
createauth = express.Router();


createauth.post('/createAuth', createAuth );

module.exports = { createauth }
