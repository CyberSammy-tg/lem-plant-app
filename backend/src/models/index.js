
const User = require('./user.model');
const Plant = require('./plant.model');
const Rabbit = require('./rabbit.model');
const Order = require('./order.model');
const OrderLineItem = require('./orderLineItem.model');
const CareSchedule = require('./careSchedule.model');
const ReportedIssue = require('./reportedIssue.model');
const SystemAuditLog = require('./systemAuditLog.model');

// User associations
User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(ReportedIssue, { foreignKey: 'reporter_id' });
ReportedIssue.belongsTo(User, { foreignKey: 'reporter_id' });

User.hasMany(SystemAuditLog, { foreignKey: 'user_id' });
SystemAuditLog.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(CareSchedule, { foreignKey: 'assigned_to' });
CareSchedule.belongsTo(User, { foreignKey: 'assigned_to' });

// Order associations
Order.hasMany(OrderLineItem, { foreignKey: 'order_id' });
OrderLineItem.belongsTo(Order, { foreignKey: 'order_id' });

// Product associations
Plant.hasMany(OrderLineItem, { foreignKey: 'plant_id' });
OrderLineItem.belongsTo(Plant, { foreignKey: 'plant_id' });

Rabbit.hasMany(OrderLineItem, { foreignKey: 'rabbit_id' });
OrderLineItem.belongsTo(Rabbit, { foreignKey: 'rabbit_id' });

Plant.hasMany(CareSchedule, { foreignKey: 'plant_id' });
CareSchedule.belongsTo(Plant, { foreignKey: 'plant_id' });

Rabbit.hasMany(CareSchedule, { foreignKey: 'rabbit_id' });
CareSchedule.belongsTo(Rabbit, { foreignKey: 'rabbit_id' });

module.exports = {
  User,
  Plant,
  Rabbit,
  Order,
  OrderLineItem,
  CareSchedule,
  ReportedIssue,
  SystemAuditLog,
};
