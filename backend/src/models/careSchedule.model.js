
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Plant = require('./plant.model');
const Rabbit = require('./rabbit.model');
const User = require('./user.model');

const CareSchedule = sequelize.define('CareSchedule', {
  schedule_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  task_type: {
    type: DataTypes.ENUM('watering', 'feeding', 'mating'),
    allowNull: false,
  },
  start_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  recurrence: {
    type: DataTypes.ENUM('daily', 'weekly', 'custom'),
  },
  assigned_to: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  sms_alert_enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = CareSchedule;
