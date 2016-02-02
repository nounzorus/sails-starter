/* global Users describe beforeEach it*/

'use strict';

const assert = require('chai').assert;
const fake = require('../../../fixtures/Users.js');

module.exports = (options) => {
    describe('.create()', () => {
        describe('# Null, undefined or empty objects', () => {
            it('should reject a null object', (done) => {
                Users.create(null).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject an undefined object', (done) => {
                Users.create(undefined).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject an empty object', (done) => {
                Users.create({}).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
        });

        describe('# Fake objects', () => {
            let user;
            beforeEach((done) => {
                user = fake.build();
                done();
            });

            it('should reject an email-null object', (done) => {
                delete user.email;
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject an email-undefined object', (done) => {
                user.email = undefined;
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject an email-empty object', (done) => {
                user.email = '';
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });

            it('should reject a firstname-null object', (done) => {
                delete user.firstname;
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a firstname-undefined object', (done) => {
                user.firstname = undefined;
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a firstname-empty object', (done) => {
                user.firstname = '';
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });

            it('should reject a lastname-null object', (done) => {
                delete user.lastname;
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a lastname-undefined object', (done) => {
                user.lastname = undefined;
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a lastname-empty object', (done) => {
                user.lastname = '';
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });

            it('should reject a post-null object', (done) => {
                delete user.post;
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a post-undefined object', (done) => {
                user.post = undefined;
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a post-empty object', (done) => {
                user.post = '';
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });

            it('should reject a password-null object', (done) => {
                delete user.password;
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a password-undefined object', (done) => {
                user.password = undefined;
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a password-empty object', (done) => {
                user.password = '';
                Users.create(user).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });

            it('should accept a valid object', (done) => {
                Users.create(fake.build()).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });

            // it('should accept a passwordToken-null object', (done) => {
            //     user.passwordToken = null;
            //     Users.create(user).exec((err) => {
            //         assert.isNull(err, 'err should be null');
            //         done();
            //     });
            // });
            it('should accept a passwordToken-undefined object', (done) => {
                user.passwordToken = undefined;
                Users.create(user).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a passwordToken-empty object', (done) => {
                user.passwordToken = '';
                Users.create(user).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });

            // it('should accept a passwordTokenExpiration-null object', (done) => {
            //     user.passwordTokenExpiration = null;
            //     Users.create(user).exec((err) => {
            //         assert.isNull(err, 'err should be null');
            //         done();
            //     });
            // });
            it('should accept a passwordTokenExpiration-undefined object', (done) => {
                user.passwordTokenExpiration = undefined;
                Users.create(user).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
        });

        describe('# Data integrity', () => {
            it('should store an id', (done) => {
                Users.create(fake.build()).exec((err, created) => {
                    assert.isNotNull(created.id, 'created.id should not be null');
                    assert.isDefined(created.id, 'created.id should be defined');
                    done();
                });
            });
            it('should store a creation date', (done) => {
                Users.create(fake.build()).exec((err, created) => {
                    assert.isNotNull(created.createdAt, 'created.createdAt should not be null');
                    assert.isDefined(created.createdAt, 'created.createdAt should be defined');
                    done();
                });
            });
            it('should store an update date', (done) => {
                Users.create(fake.build()).exec((err, created) => {
                    assert.isNotNull(created.updatedAt, 'created.updatedAt should not be null');
                    assert.isDefined(created.updatedAt, 'created.updatedAt should be defined');
                    done();
                });
            });
            it('should store identical creation date and update date', (done) => {
                Users.create(fake.build()).exec((err, created) => {
                    assert.deepEqual(created.createdAt, created.updatedAt);
                    done();
                });
            });
            it('should store email as a string matching the email pattern', (done) => {
                Users.create(fake.build()).exec((err, created) => {
                    assert.isString(created.email, 'created.email should be a string');
                    assert.match(created.email, options.emailRegex, 'created.email should be a valid email');
                    done();
                });
            });
            it('should store lastname as a string', (done) => {
                Users.create(fake.build()).exec((err, created) => {
                    assert.isString(created.lastname, 'created.lastname should be a string');
                    done();
                });
            });
            it('should store firstname as a string', (done) => {
                Users.create(fake.build()).exec((err, created) => {
                    assert.isString(created.firstname, 'created.firstname should be a string');
                    done();
                });
            });
            it('should store passwordToken as a string', (done) => {
                Users.create(fake.build({ optional: true })).exec((err, created) => {
                    assert.isString(created.passwordToken, 'created.passwordToken should be a string');
                    done();
                });
            });
            it('should store passwordTokenExpiration as an integer', (done) => {
                Users.create(fake.build({ optional: true })).exec((err, created) => {
                    assert.isNumber(created.passwordTokenExpiration, 'created.passwordTokenExpiration should be a number');
                    assert.strictEqual(created.passwordTokenExpiration % 1, 0, 'created.passwordTokenExpiration should be an integer');
                    done();
                });
            });

            it('should encrypt the provided password', (done) => {
                Users.create(fake.build()).exec((err, created) => {
                    assert.match(created.password, options.passwordRegex, 'created.password should be bcrypt encrypted');
                    done();
                });
            });
        });
    });
};
