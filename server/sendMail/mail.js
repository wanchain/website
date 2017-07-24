const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('./email.config');


smtpTransport = nodemailer.createTransport(smtpTransport({
    service: config.email.service,
    auth: {
        user: config.email.user,
        pass: config.email.pass,
    }
}));

var sendMail = (recipient, subject, html) => {
    smtpTransport.sendMail({
        from: config.email.user,
        to: recipient,
        subject: subject,
        html: html
    }, (error, response) => {
        if (error) {
            console.log(error);
        } else {
            console.log('send mail success')
        }
    });
};

module.exports = sendMail;
