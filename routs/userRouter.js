const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.route("/")
    .post(userController.createUser)
    .patch(userController.updateDetailes)

module.exports=userRouter;