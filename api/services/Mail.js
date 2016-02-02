/* global sails */

/**
* Mail.js
*
* @description :: Mailing Service
* @help        :: http://sailsjs.org/#!/documentation/concepts/Services
*/

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: sails.config.services.mail.user,
        pass: sails.config.services.mail.password,
    },
});

module.exports = {
    send(to, subject, text, email) {
        const mailOptions = { from: 'Cozigou Dev <evernet.dev@gmail.com>', to, subject, text, email };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return sails.log(err);
            }
            return sails.log('Message sent: ' + info.response);
        });
    },
};
