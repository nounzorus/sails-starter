/* global Users describe beforeEach it*/

'use strict';

const assert = require('chai').assert;
const fake = require('../../../fixtures/Users.js');

module.exports = () => {
    describe('.destroy()', () => {
        // describe('# Null or empty criteria', () => {
        //     it('should reject a null-based destruction', (done) => {
        //         Users.destroy(null).exec((err) => {
        //             assert.isNotNull(err, 'err should not be null');
        //             done();
        //         });
        //     });
        //     it('should reject an empty-based destruction', (done) => {
        //         Users.update({}, {}).exec((err) => {
        //             assert.isNotNull(err, 'err should not be null');
        //             done();
        //         });
        //     });
        // });

        describe('# Fake required criteria', () => {
            let user;
            beforeEach((done) => {
                Users.create(fake.build()).exec((err, created) => {
                    user = created;
                    done();
                });
            });

            it('should accept an id-based destruction', (done) => {
                Users.destroy({ id: user.id }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept an email-based destruction', (done) => {
                Users.destroy({ email: user.email }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a firstname-based destruction', (done) => {
                Users.destroy({ firstname: user.fistname }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a lastname-based destruction', (done) => {
                Users.destroy({ lastname: user.lastname }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a password-based destruction', (done) => {
                Users.destroy({ password: user.password }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a post-based destruction', (done) => {
                Users.destroy({ password: user.password }).exec((err) => {
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

            it('should accept a passwordToken-based destruction', (done) => {
                Users.destroy({ passwordToken: user.passwordToken }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a passwordTokenExpiration-based destruction', (done) => {
                Users.destroy({ passwordTokenExpiration: user.passwordTokenExpiration }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
        });
    });
};
