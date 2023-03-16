const express = require("express");
const complaintesController = require("../controllers/cityController");
const complaintesRouter = express.Router();

complaintesRouter.route("/")
    .get(complaintesController.getcomplaintes)
    .post(complaintesController.addComplaintes)


module.exports = cityRouter;