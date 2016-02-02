/* global Users describe beforeEach it*/

'use strict';

const assert = require('chai').assert;
const fake = require('../../../fixtures/Users.js');

module.exports = () => {
    describe('.update()', () => {
        let user;
        beforeEach((done) => {
            Users.create(fake.build()).exec((err, created) => {
                user = created;
                done();
            });
        });

        describe('# Null, undefined or empty updates', () => {
            // it('should accept a null update', (done) => {
            //     Users.update({ id: user.id }, null).exec((err) => {
            //         assert.isNull(err, 'err should be null');
            //         done();
            //     });
            // });
            // it('should accept an undefined update', (done) => {
            //     Users.update({ id: user.id }, undefined).exec((err) => {
            //         assert.isNull(err, 'err should be null');
            //         done();
            //     });
            // });

            it('should accept an empty update', (done) => {
                Users.update({ id: user.id }, {}).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
        });

        describe('# Fake updates', () => {
            it('should reject an email-null update', (done) => {
                Users.update({ id: user.id }, { email: null }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject an email-undefined update', (done) => {
                Users.update({ id: user.id }, { email: undefined }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject an email-empty update', (done) => {
                Users.update({ id: user.id }, { email: '' }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });

            it('should reject a firstname-null update', (done) => {
                Users.update({ id: user.id }, { firstname: null }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a firstname-undefined update', (done) => {
                Users.update({ id: user.id }, { firstname: undefined }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a firstname-empty update', (done) => {
                Users.update({ id: user.id }, { firstname: '' }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });

            it('should reject a lastname-null update', (done) => {
                Users.update({ id: user.id }, { lastname: null }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a lastname-undefined update', (done) => {
                Users.update({ id: user.id }, { lastname: undefined }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a lastname-empty update', (done) => {
                Users.update({ id: user.id }, { lastname: '' }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });

            it('should reject a post-null update', (done) => {
                Users.update({ id: user.id }, { post: null }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a post-undefined update', (done) => {
                Users.update({ id: user.id }, { post: undefined }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a post-empty update', (done) => {
                Users.update({ id: user.id }, { post: '' }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });

            it('should reject a password-null update', (done) => {
                Users.update({ id: user.id }, { password: null }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a password-undefined update', (done) => {
                Users.update({ id: user.id }, { password: undefined }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });
            it('should reject a password-empty update', (done) => {
                Users.update({ id: user.id }, { password: '' }).exec((err) => {
                    assert.isNotNull(err, 'err should not be null');
                    done();
                });
            });

            it('should accept a valid update', (done) => {
                Users.update({ id: user.id }, user).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });

            // it('should accept a passwordToken-null update', (done) => {
            //     Users.update({ id: user.id }, { passwordToken: null }).exec((err) => {
            //         assert.isNull(err, 'err should be null');
            //         done();
            //     });
            // });
            it('should accept a passwordToken-undefined update', (done) => {
                Users.update({ id: user.id }, { passwordToken: undefined }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
            it('should accept a passwordToken-empty update', (done) => {
                Users.update({ id: user.id }, { passwordToken: '' }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });

            // it('should accept a passwordTokenExpiration-null update', (done) => {
            //     Users.update({ id: user.id }, { passwordTokenExpiration: null }).exec((err) => {
            //         assert.isNull(err, 'err should be null');
            //         done();
            //     });
            // });
            it('should accept a passwordTokenExpiration-undefined update', (done) => {
                Users.update({ id: user.id }, { passwordTokenExpiration: undefined }).exec((err) => {
                    assert.isNull(err, 'err should be null');
                    done();
                });
            });
        });
    });
};
