const express = require("express");
const logInController = require("../controllers/logInController");
const logInRouter = express.Router();

logInRouter.route("/register").post(logInController.createLogIn)
    .post(logInController.logIn)
    .get(logInController.newPassword)

module.exports = logInRouter;