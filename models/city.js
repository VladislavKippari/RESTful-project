'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    
    name: DataTypes.STRING,
    countryCode: DataTypes.STRING,
    district: DataTypes.STRING,
    population: DataTypes.INTEGER
  }, {timestamps: false});
  City.associate = function(models) {
    City.hasOne(models.Country,{
      foreignKey: 'code',
      as: 'countryCode'
    });
  };
  return City;
};