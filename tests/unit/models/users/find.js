/* global Users describe before beforeEach it*/

'use strict';

const assert = require('chai').assert;
const fake = require('../../../fixtures/Users.js');

module.exports = () => {
    describe('#find()', () => {
        describe('# Fake required criteria', () => {
            let user;
            beforeEach((done) => {
                Users.create(fake.build()).exec((err, created) => {
                    user = created;
                    done();
                });
            });

            it('should accept an id-based request', (done) => {
                Users.find({ id: user.id }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept an email-based request', (done) => {
                Users.find({ email: user.email }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a firstname-based request', (done) => {
                Users.find({ firstname: user.fistname }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a lastname-based request', (done) => {
                Users.find({ lastname: user.lastname }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a password-based request', (done) => {
                Users.find({ password: user.password }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a post-based request', (done) => {
                Users.find({ password: user.password }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a passwordToken-based request', (done) => {
                Users.find({ passwordToken: user.passwordToken }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a passwordTokenExpiration-based request', (done) => {
                Users.find({ passwordTokenExpiration: user.passwordTokenExpiration }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
        });

        describe('# Fake optional criteria', () => {
            let user;
            beforeEach((done) => {
                Users.create(fake.build({ optional: true })).exec((err, created) => {
                    user = created;
                    done();
                });
            });

            it('should accept a passwordToken-based request', (done) => {
                Users.find({ passwordToken: user.passwordToken }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a passwordTokenExpiration-based request', (done) => {
                Users.find({ passwordTokenExpiration: user.passwordTokenExpiration }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
        });
        // describe('#find()', () => {
        //     before((done) => {
        //         const N = 20;
        //         const users = [];
        //         while (users.length < N) {
        //             users.push(fake.build());
        //         }
        //         Users.create(users).exec(() => {
        //             done();
        //         });
        //     });
        //     it('should check find function', (done) => {
        //         Users.find().then((results) => {
        //             assert(results.length >= 20); // TODO insert a test user before tests
        //             // var user = results[0];
        //             // assert.typeOf(user.firstname, 'string', "firstname (string) required");
        //             // assert.typeOf(user.lastname, 'string', "lastname (string) required");
        //             // assert.typeOf(user.email, 'string', "email (string) required");
        //             // assert.typeOf(user.password, 'string', "password (string) required");
        //             // assert.typeOf(user.post, 'string', "post (string) required");
        //             // assert.isDefined(user.passwordToken, "passwordToken (string) defaultsTo null");
        //             // assert.isDefined(user.passwordToken, "passwordTokenExpiration (int) defaultsTo null");
        //             // assert.match(user.password.match, passwordRegex, "password (string) is bcrypt encrypted");
        //             done();
        //         });
        //     });
        // });
    });
};
