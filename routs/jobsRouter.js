const express = require("express");

const jobsController = require("../controllers/jobsController");

const jobsRouter = express.Router();
jobsRouter.route("/")
        .get(jobsController.getJobs)
        .post(jobsController.createJob)

jobsRouter.route("/:id").delete(jobsController.deleteJob)
module.exports = jobsRouter;