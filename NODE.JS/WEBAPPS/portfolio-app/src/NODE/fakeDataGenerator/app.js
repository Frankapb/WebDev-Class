const faker = require('faker/locale/nl_BE');

const fullname = faker.name.findName();
const email = faker.internet.email();

console.log(`${fullname}\n${email}`);