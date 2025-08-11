
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./order.model');
const Plant = require('./plant.model');
const Rabbit = require('./rabbit.model');

const OrderLineItem = sequelize.define('OrderLineItem', {
  line_item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'order_id',
    },
  },
  plant_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Plant,
      key: 'plant_id',
    },
    allowNull: true,
  },
  rabbit_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Rabbit,
      key: 'rabbit_id',
    },
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price_at_purchase: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

module.exports = OrderLineItem;
