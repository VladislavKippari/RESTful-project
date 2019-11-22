'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
   
    code: {type:DataTypes.STRING, unique: true,
      primaryKey: true},
    name: DataTypes.STRING,
    continent: DataTypes.STRING,
    region: DataTypes.STRING,
    surfacearea: DataTypes.INTEGER,
    indepyear: DataTypes.INTEGER,
    population: DataTypes.INTEGER,
    lifeexpectancy: DataTypes.INTEGER,
    gnp: DataTypes.INTEGER,
    gnpold: DataTypes.INTEGER,
    localname: DataTypes.STRING,
    governmentform: DataTypes.STRING,
    headofstate: DataTypes.STRING,
    capital: DataTypes.INTEGER,
    code2: DataTypes.STRING
  }, {timestamps: false});
 
  return Country;
};