
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rabbit = sequelize.define('Rabbit', {
  rabbit_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  care_instructions: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  birth_date: {
    type: DataTypes.DATE,
  },
  mating_date: {
    type: DataTypes.DATE,
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Rabbit;
