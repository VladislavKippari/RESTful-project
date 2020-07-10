'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    id: {
      type: DataTypes.INTEGER,

      unique: true,
      primaryKey: true
  },
    name: {type:DataTypes.STRING},
    countryCode: {type:DataTypes.STRING},
    district: {type:DataTypes.STRING}, 
    population: {type:DataTypes.INTEGER}
  }, {timestamps: false, freezeTableName:true});
 
  return City;
};