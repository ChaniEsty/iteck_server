const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.route("/")
    .put(userController.updateDetailes)


    module.exports=userRouter;