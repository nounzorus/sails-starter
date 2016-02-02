/**
* Users.js
*
* @description :: Users Model
* @docs        :: http://sailsjs.org/#!documentation/models
*/

// Imports
const bcrypt = require('bcrypt');
const attributes = require('./users/users.attributes.js');
const properties = require('./users/users.properties.js');
const methods = require('./users/users.methods.js');

// Private constants
const ENCRYPTION_COST = 10;

module.exports = {
    attributes,
    properties,
    methods,

    beforeCreate(willBeCreated, next) {
        const user = willBeCreated;
        if (user.email) {
            user.email = user.email.toLowerCase();
        }

        // Password encryption before create
        bcrypt.genSalt(ENCRYPTION_COST, (errGen, salt) => {
            if (errGen) {
                return next(errGen);
            }

            bcrypt.hash(user.password, salt, (errHash, hash) => {
                if (errHash) {
                    return next(errHash);
                }

                user.password = hash;
                next(null, user);
            });
        });
    },

    beforeUpdate(willBeUpdated, next) {
        const user = willBeUpdated;
        if (user.email) {
            user.email = user.email.toLowerCase();
        }

        // Password encryption before update
        if (user.password && !user.password.match(this.properties.hashedPasswordRegex)) {
            bcrypt.genSalt(ENCRYPTION_COST, (errGen, salt) => {
                if (errGen) {
                    return next(errGen);
                }

                bcrypt.hash(user.password, salt, (errHash, hash) => {
                    if (errHash) {
                        return next(errHash);
                    }

                    user.password = hash;
                    return next(null, user);
                });
            });
        } else {
            return next(null, user);
        }
    },
};
