const emailService = require("../services/email.service.js");
async function sendEmail(req, res){
    const { name, phoneNumber, email, message, type } = req.body;
    let result = await emailService.sendEmail(name, phoneNumber, email, message, type);
    res.send(result);
}
module.exports = {
    sendEmail
}