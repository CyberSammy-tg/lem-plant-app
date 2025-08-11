
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Plant = sequelize.define('Plant', {
  plant_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  care_instructions: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  placement: {
    type: DataTypes.ENUM('indoor', 'outdoor'),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Plant;
