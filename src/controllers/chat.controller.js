const chatService = require("../services/chat.service.js");
async function chat(req, res){
    let result = await chatService.chat();
    res.send(result);
}
module.exports = {
    chat
}