const { User } = require('../Models');

const users = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password456',
  },
];

const seedUsers = async () => {
  try {
    await User.bulkCreate(users);
    console.log('Users table seeded!');
  } catch (error) {
    console.error('Failed to seed users:', error);
  }
};

module.exports = seedUsers;
