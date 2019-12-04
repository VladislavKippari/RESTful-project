'use strict';
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  const Country = sequelize.define('Country', {
    code: {type:DataTypes.STRING, unique: true,
      primaryKey: true},
      name:{type: DataTypes.STRING},
      continent:{type: DataTypes.STRING},
      region: {type:DataTypes.STRING},
      surfacearea: {type:DataTypes.INTEGER},
      indepyear: {type:DataTypes.INTEGER},
      population: {type:DataTypes.INTEGER},
      lifeexpectancy:{type: DataTypes.INTEGER},
      gnp:{type: DataTypes.INTEGER},
      gnpold:{type: DataTypes.INTEGER},
      localname: {type:DataTypes.STRING},
      governmentform: {type:DataTypes.STRING},
      headofstate: {type:DataTypes.STRING},
      capital: {type:DataTypes.INTEGER},
      code2: {type:DataTypes.STRING}
  }, {timestamps: false, freezeTableName:true});
=======
  const Country = sequelize.define('Countrys', {
   
    code: {type:DataTypes.STRING, unique: true,
      primaryKey: true},
    name:{type: DataTypes.STRING},
    continent:{type: DataTypes.STRING},
    region: {type:DataTypes.STRING},
    surfacearea: {type:DataTypes.INTEGER},
    indepyear: {type:DataTypes.INTEGER},
    population: {type:DataTypes.INTEGER},
    lifeexpectancy:{type: DataTypes.INTEGER},
    gnp:{type: DataTypes.INTEGER},
    gnpold:{type: DataTypes.INTEGER},
    localname: {type:DataTypes.STRING},
    governmentform: {type:DataTypes.STRING},
    headofstate: {type:DataTypes.STRING},
    capital: {type:DataTypes.INTEGER},
    code2: {type:DataTypes.STRING}
  }, {timestamps: false});
  
 
>>>>>>> 5b9316306e2ad7d1d89f249ba3172cca293645a3
  return Country;
};