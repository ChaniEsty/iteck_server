const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
const verifyJWT = require("../middleware/verifyJWT")

userRouter.route("/")
    .post(userController.sendCv)
userRouter.route("/:id")
    .get(userController.getUserById)
    .put(verifyJWT,userController.updateDetailes)
// userRouter.route("/job")
    // .put(verifyJWT,userController.updateJobRequirments)
userRouter.route("/:id/job")
    .post(verifyJWT,userController.updateJobRequirments)

module.exports = userRouter;