const express = require('express');
const { getAllusers, getUser } = require('../controllers/users.controller');
userRouter = express.Router();



userRouter.get('/getAllUsers', getAllusers);

userRouter.post('/getUser', getUser);


module.exports = { userRouter }
