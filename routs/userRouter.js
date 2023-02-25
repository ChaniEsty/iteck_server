const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
const verifyJWT = require("../middleware/verifyJWT")


userRouter.route("/")
    .post(verifyJWT,userController.sendCv)
    .patch(verifyJWT,userController.updateDetailes)
userRouter.route("/job")
    .patch(verifyJWT,userController.updateJobRequirments)
module.exports = userRouter;