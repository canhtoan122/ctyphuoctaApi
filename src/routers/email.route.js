const express = require("express");
const EmailController = require("../controllers/email.controller.js");
const emailRouter = express.Router();

emailRouter.post("/submit", (req, res) =>{
    EmailController.sendEmail(req, res);
});
module.exports = emailRouter;