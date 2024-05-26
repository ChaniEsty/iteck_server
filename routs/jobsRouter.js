const express = require("express");
const verifyJWT = require("../middleware/verifyJWT")

const jobsController = require("../controllers/jobsController");
const jobsRouter = express.Router();
jobsRouter.route("/")
        // .get(verifyJWT,jobsController.getJobs)
        .post(verifyJWT, jobsController.createJob)
jobsRouter.route("/:id")
        .delete(jobsController.deleteJob)
        .get(jobsController.getJobsByUserId)
jobsRouter.route("/personality/:id")
        .get(jobsController.getJobs)
module.exports = jobsRouter;