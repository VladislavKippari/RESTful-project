
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

db.role.belongsToMany(db.user, { through: 'user', foreignKey:  'roleId'});
db.user.belongsTo(db.role, { through: 'role',  foreignKey: 'roleId'});
db.country.hasMany(db.city, { as: 'capitaltown'});
db.city.belongsTo(db.country, { foreignKey: 'countryCode', as:'country'});
module.exports = db;

