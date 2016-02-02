/* global Users describe before beforeEach it*/

const create = require('./users/create.js');
const find = require('./users/find.js');
const update = require('./users/update.js');
const destroy = require('./users/destroy.js');

const users = {};
users.properties = require('../../../api/models/Users.js').properties;

/*
* Bcrypt result is divided in several fields
* Fields are separated by the '$' character
* First field is the version field (any character except '$', any length)
* Second field is the cost (level of encryption) field (digits, any length)
* Last field is the encrypted phrase itself (any character, any length even if it depends on the encryption cost)
*/

describe('User Model', () => {
    const options = {
        passwordRegex: users.properties.hashedPasswordRegex,
        emailRegex: users.properties.strictEmailRegex,
    };

    create(options);
    find();
    update();
    destroy();
});
