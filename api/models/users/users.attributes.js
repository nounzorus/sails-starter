/**
* users.attributes.js
*
* @description :: Users model attributes
* @help        :: See http://sailsjs.org/#!/documentation/concepts/models-and-orm/attributes
*/

module.exports = {
    firstname: {
        type: 'string',
        required: true,
    },
    lastname: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'email',
        required: true,
        unique: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    post: {
        type: 'string',
        required: true,
    },
    passwordToken: {
        type: 'string',
        defaultsTo: null,
    },
    passwordTokenExpiration: {
        type: 'integer',
        defaultsTo: null,
    },
    toJSON() {
        const obj = this.toObject();
        delete obj.password;
        delete obj.passwordToken;
        return obj;
    },
};
