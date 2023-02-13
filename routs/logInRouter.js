const express = require("express");
const logInController = require("../controllers/logInController");
const logInRouter = express.Router();

logInRouter.route("/").post(logInController.createLogIn)
logInRouter.route("/").get(logInController.newPassword)


module.exports = logInRouter;