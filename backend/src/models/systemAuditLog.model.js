
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');

const SystemAuditLog = sequelize.define('SystemAuditLog', {
  log_id: {
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
  action: {
    type: DataTypes.ENUM('edit', 'delete'),
    allowNull: false,
  },
  table_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  record_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  old_value: {
    type: DataTypes.JSON,
  },
  new_value: {
    type: DataTypes.JSON,
  },
});

module.exports = SystemAuditLog;
