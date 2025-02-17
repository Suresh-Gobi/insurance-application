const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  User,
};
