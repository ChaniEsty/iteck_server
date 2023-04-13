const express = require("express");
const subjectController = require("../controllers/subjectController");
const subjectRouter = express.Router();

subjectRouter.route("/")
    .get(subjectController.getSubjects)


module.exports = subjectRouter;