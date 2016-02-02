/* global Users, Jwt*/

/**
* UsersController.js
*
* @description :: Users controller
* @help        :: See http://sailsjs.org/#!/documentation/concepts/controllers
*/

module.exports = {

    /**
    * @api {post} /user/login
    * @apiName Login
    * @apiGroup User
    * @apiParam {string} email User's email.
    * @apiParam {string} password User's password.
    */
    login(req, res) {
        const email = req.param('email');
        const password = req.param('password');

        if (!email || !password) {
            return res.badRequest({ error: { message: req.__('api.messages.emailAndPasswordRequired') } });
        }

        Users.findOne({ email }, (errFind, user) => {
            if (errFind) {
                return res.serverError({ error: errFind });
            }
            if (!user) {
                return res.badRequest({ error: { message: req.__('api.messages.userEmailNotFound') } });
            }

            Users.methods.comparePassword(password, user, (errCompare, valid) => {
                if (errCompare) {
                    return res.serverError({ error: errCompare });
                }
                if (!valid) {
                    return res.badRequest({ error: { message: req.__('api.messages.incorrectPassword') } });
                }

                res.ok({
                    user: user.toJSON(),
                    token: Jwt.issue({ id: user.id }),
                    message: req.__('api.messages.successfulLogin'),
                });
            });
        });
    },
};
