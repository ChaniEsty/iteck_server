const express = require("express");
const logInController = require("../controllers/logInController");
const logInRouter = express.Router();

logInRouter.route("/register").post(logInController.createLogIn).get(logInController.try)
logInRouter.route("/logIn")
    .post(logInController.logIn)
    .get(logInController.newPassword)

module.exports = logInRouter;