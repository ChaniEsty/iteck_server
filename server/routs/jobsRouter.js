const express = require("express");
const verifyJWT = require("../middleware/verifyJWT")

const jobsController = require("../controllers/jobsController");
const jobsRouter = express.Router();
jobsRouter.route("/")
        .get(jobsController.getJobs)
        .post(verifyJWT,jobsController.createJob)

jobsRouter.route("/:id").delete(jobsController.deleteJob)
module.exports = jobsRouter;