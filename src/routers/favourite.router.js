const expres = require("express");
const { favourite, addFavor, unFavor } = require("../controllers/favourite.controller");
const favouriteRouter = expres.Router();

favouriteRouter.post("/favourite", favourite);

favouriteRouter.post("/addfavourite", addFavor);

favouriteRouter.post("/unfavourite", unFavor);

module.exports = { favouriteRouter };



