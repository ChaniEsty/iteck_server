var nodemailer = require('nodemailer');

class Email {
    sendEmail = (addressee, subject,text) => {
        console.log("sending email", addressee);
        var transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: process.env.USER_MAIL,
                pass: process.env.PASSWORD_MAIL
            }
        });
        var mailOptions = {
            from: process.env.USER_MAIL,
            to: addressee,
            subject: subject,
            text: text,
        };
        transporter.sendMail(mailOptions, function (error, info) {

            if (error) {
                console.log("sending mail", error);
            }
            else {

                console.log('Email sent: ' + info.response);
            }
        });
    }
}

const email = new Email();
module.exports = email;