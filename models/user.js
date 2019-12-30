'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {timestamps: false, freezeTableName:true});
  User.associate = function(models) {
    User.hasOne(models.Role,{
      foreignKey: 'id',
      as: 'roleId'
    });
  };
  return User;
};