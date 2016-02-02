/* global Jwt, Users*/

/**
* isAuthorized
*
* @description :: Policy to check if user is authorized with JSON web token
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
*/

module.exports = (req, res, next) => {
    if (req.headers['x-access-token']) {
        const jwt = req.headers['x-access-token'];
        Jwt.verify(jwt, (errVerify, clear) => {
            if (errVerify) {
                return res.json(500, { error: errVerify });
            }
            if (!clear.id) {
                return res.json(401, { error: { message: req.__('api.messages.invalidAccessToken') } });
            }
            Users.findOne({ id: clear.id }).exec((errFind, user) => {
                if (errFind) {
                    return res.json(500, { error: errFind });
                }
                if (!user) {
                    return res.json(401, { error: req.__('api.messages.userIdNotFound') });
                }
                req.user = user;
                next();
            });
        });
    } else {
        return res.badRequest({ error: { message: req.__('api.messages.accessTokenRequired') } });
    }
};
