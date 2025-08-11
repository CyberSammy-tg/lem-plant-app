
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'declined'),
    defaultValue: 'pending',
  },
  shipping_address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Order;
