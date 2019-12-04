
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
 

 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.user = require('./user.js')(sequelize, Sequelize);
db.role = require('./role.js')(sequelize, Sequelize);
db.city = require('./city.js')(sequelize, Sequelize);
db.country = require('./country.js')(sequelize, Sequelize);

db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'id', otherKey: 'userId'});
db.user.belongsTo(db.role, { through: 'user_roles', foreignKey: 'id', otherKey: 'roleId'});
db.country.belongsToMany(db.city, { through: 'country_city', unique: false});
db.city.belongsTo(db.country, { through: 'country_city', unique: false});
module.exports = db;

