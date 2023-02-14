const express = require("express");
const cityController = require("../controllers/cityController");
const cityRouter = express.Router();

cityRouter.route("/")
    .get(cityController.getCities)


module.exports=cityRouter;