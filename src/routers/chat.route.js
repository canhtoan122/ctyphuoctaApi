const express = require("express");
const chatController = require("../controllers/chat.controller.js");
const chatRouter = express.Router();

chatRouter.post("/", (req, res) =>{
    chatController.chat(req, res);
});
module.exports = chatRouter;