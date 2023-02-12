const express = require("express");
const logInController = require("../controllers/logInController");
const logInRouter = express.Router();

logInRouter.route("/")
    .post(logInController.createLogIn)
    .patch(logInController.newPassword)


module.exports=logInRouter;