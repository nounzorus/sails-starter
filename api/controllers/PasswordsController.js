/* global Users Mail*/

/**
* PasswordsController
*
* @description :: Passwords controller
* @help        :: See http://sailsjs.org/#!/documentation/concepts/controllers
*/

const crypto = require('crypto');

// Password token validity time in milliseconds
const passwordTokenLifetime = 24 * 60 * 60 * 1000;

module.exports = {

    /**
    * @api {post} /password/forgot
    * @apiName ForgotPassword
    * @apiGroup Password
    * @apiParam {string} email User's email.
    */
    forgot(req, res) {
        const email = req.param('email');
        const token = crypto.randomBytes(64).toString('hex');
        const expiration = Date.now() + passwordTokenLifetime;

        if (!email) {
            return res.badRequest({ error: { message: req.__('api.messages.emailRequired') } });
        }

        Users.findOne({ email }).exec((errFind, user) => {
            if (errFind) {
                return res.serverError({ error: errFind });
            }
            if (!user) {
                return res.badRequest({ error: { message: req.__('api.messages.userEmailNotFound') } });
            }
            const data = user;
            data.passwordToken = token;
            data.passwordTokenExpiration = expiration;

            data.save((err, saved) => {
                if (err) {
                    return res.serverError({ error: err });
                }

                Mail.send(saved.email, req.__('api.strings.passwordMailSubject'), saved.passwordToken);

                return res.ok({
                    email: saved.email,
                    expiration: saved.passwordTokenExpiration,
                    message: req.__('api.messages.passwordTokenGenerated'),
                });
            });
        });
    },

    /**
    * @api {post} /password/change
    * @apiName ChangePassword
    * @apiGroup Password
    * @apiParam {string} token Security token.
    * @apiParam {string} password User's desired password.
    * @apiParam {string} passwordConfirmation User's desired password confirmation.
    */
    change(req, res) {
        const passwordToken = req.param('token');
        const password = req.param('password');
        const passwordConfirmation = req.param('passwordConfirmation');

        if (!passwordConfirmation || !password) {
            return res.badRequest({ error: { message: req.__('api.messages.passwordAndConfirmationRequired') } });
        }
        if (passwordConfirmation !== password) {
            return res.badRequest({ error: { message: req.__('api.messages.differentPasswords') } });
        }

        Users.findOne({ passwordToken }, (err, user) => {
            if (err) {
                return res.serverError({ error: err });
            }
            if (user.passwordTokenExpiration < Date.now()) {
                return res.badRequest({ error: { message: req.__('api.messages.outdatedPasswordToken') } });
            }

            Users.update({ id: user.id }, { password, passwordTokenExpiration: -1 }).exec((errUpdate, updated) => {
                return errUpdate ? res.serverError({ error: err }) : res.ok({
                    user: updated[0],
                    message: req.__('api.messages.successfulUserUpdate'),
                });
            });
        });
    },
};
