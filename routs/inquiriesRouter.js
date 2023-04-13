const express = require("express");
const inquiriesController = require("../controllers/inquiriesController");
const inquiriesRouter = express.Router();
const verifyJWT = require("../middleware/verifyJWT");

inquiriesRouter.route("/")
    .get(inquiriesController.getInquiries)
    .post(verifyJWT, inquiriesController.addInquiry)
    
inquiriesRouter.route("/:id")
    .get(inquiriesController.getInquiryById)
    .delete(inquiriesController.deleteInquiry)

module.exports = inquiriesRouter;
