const nodemailer = require('nodemailer');
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});
const createMail = async (transporter, mailOption) => {
    await transporter.sendMail(mailOption);
}

async function sendEmail(name, phoneNumber, email, message, type) {
    const customerEmail = {
        from: process.env.EMAIL_USER, // sender address
        to: email, // list of receivers
        subject: "Yêu cầu vận tải", // Subject line
        text: `
                Cảm ơn anh/chị đã sử dụng dịch vụ của công ti chúng tôi.
                Chúng tôi sẽ liên hệ với anh/chị sau ít phút nữa.
            `,
    }
    createMail(transporter, customerEmail);
    const myEmail = {
        from: process.env.EMAIL_USER, // sender address
        to: process.env.MY_EMAIL, // list of receivers
        subject: "Yêu cầu vận tải", // Subject line
        text: `
                Họ và tên: ${name}
                Số điện thoại: ${phoneNumber}
                Email: ${email}
                Loại vận chuyển: ${type}
                Nội dung: ${message}
            `,
    }
    createMail(transporter, myEmail);
    return "Gửi email thành công!";
}
module.exports = {
    sendEmail
}