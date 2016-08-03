const faker = require('faker');
const _ = require('lodash');

module.exports = function generateDb() {
  return {
    "users": generateUsers(),
    "todos": generateTodos()
  };
};

function generateUsers() {
  return _.times(10, i => {
    return {
      id: i,
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar()
    }
  });
}

function generateTodos() {
  return _.times(50, i => {
    return {
      id: i,
      title: faker.lorem.sentence(),
      completed: faker.random.boolean(),
      userId: _.random(0, 9)
    }
  });
}
