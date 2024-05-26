const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
const verifyJWT = require("../middleware/verifyJWT")

userRouter.route("/")
    .post(verifyJWT,userController.sendCv)
userRouter.route("/job")
    .get(verifyJWT,userController.updateJobRequirments)
userRouter.route("/:id")
    .get(userController.getUserById)
    .put(verifyJWT,userController.updateDetailes)
// userRouter.route("/personality")
//     .post(verifyJWT,userController.updateUserPersonality)
// userRouter.route("/job")
    // .put(verifyJWT,userController.updateJobRequirments)


module.exports = userRouter;