const express = require("express");

const employersController = require("../controllers/employerController");

const employersRouter = express.Router();
employersRouter.route("/:id/jobs").get(employersController.getJobs)

module.exports = employersRouter;