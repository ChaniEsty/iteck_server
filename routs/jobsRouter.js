const express = require("express");

const jobsController = require("../controllers/jobsController");

const jobsRouter = express.Router();
jobsRouter.route("/").post(jobsController.getJobs)
jobsRouter.route("/:create").post(jobsController.createJob)
module.exports=jobsRouter;