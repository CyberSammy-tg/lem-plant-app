
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.model');

const ReportedIssue = sequelize.define('ReportedIssue', {
  issue_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  reporter_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  issue_type: {
    type: DataTypes.ENUM('pest', 'disease', 'equipment'),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  photo_url: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM('open', 'resolved'),
    defaultValue: 'open',
  },
});

module.exports = ReportedIssue;
