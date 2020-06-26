"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
//nodemailer.js
const nodemailer = require('nodemailer');
//创建一个smtp服务器
const config = {
    host: 'smtp.qq.com',
    port: 465,
    auth: {
        user: '1984820441@qq.com',
        pass: 'ijnkgumpxvwihaii',
    },
};
// 创建一个SMTP客户端对象
const transporter = nodemailer.createTransport(config);
//发送邮件
function sendMail(mail) {
    console.log('email开始发：', mail);
    transporter.sendMail(mail, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('mail sent:', info.response);
    });
}
exports.sendMail = sendMail;
