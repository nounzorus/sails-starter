const faker = require('faker');

faker.locale = 'fr';

module.exports = {
    build(options) {
        const user = {
            post: faker.name.jobTitle(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
        }

        if (options) {
            if (options.optional) {
                user.passwordToken = faker.random.uuid();
                user.passwordTokenExpiration = faker.random.number();
            }
        }

        return user;
    },
};
