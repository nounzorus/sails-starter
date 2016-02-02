/**
* users.methods.js
*
* @description :: Customs Users model methods
* @help        :: See http://sailsjs.org/#!/documentation/concepts/models-and-orm/attributes
*/

const bcrypt = require('bcrypt');

module.exports = {
    comparePassword(password, user, next) {
        bcrypt.compare(password, user.password, (err, match) => {
            return (err || !match) ? next(err) : next(null, true);
        });
    },
};
