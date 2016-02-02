/* global sails */

/**
* Jwt.js
*
* @description :: JSON Webtoken Service
* @help        :: http://sailsjs.org/#!/documentation/concepts/Services
*/

const jwt = require('jsonwebtoken');
const tokenSecret = sails.config.services.jwt.secret;

const DEFAULT_EXPIRES_IN = 180 * 60;

module.exports = {
    issue(payload, expiresInParameter) {
        // Default value
        const expiresIn = expiresInParameter ? expiresInParameter : DEFAULT_EXPIRES_IN;

        return jwt.sign(payload, tokenSecret, { expiresIn });
    },

    verify(token, callback) {
        return jwt.verify(token, tokenSecret, {}, callback);
    },
};
