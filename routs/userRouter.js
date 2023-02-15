const express = require("express");
const userController = require("../controllers/userController");
const userRouter = express.Router();
const verifyJWT = require("../middleware/verifyJWT")


userRouter.route("/")
    .put(verifyJWT,userController.updateDetailes)


module.exports = userRouter;