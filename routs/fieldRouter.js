const express = require("express");
const fieldController = require("../controllers/fieldController");
const fieldRouter = express.Router();

fieldRouter.route("/")
    .get(fieldController.getFields)


module.exports = fieldRouter;