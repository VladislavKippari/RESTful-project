'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('Citys', {
    id: {
      type: DataTypes.INTEGER,
     
      unique: true,
      primaryKey: true
  },
    name: {type:DataTypes.STRING},
    countryCode: {type:DataTypes.STRING,references:{model:'country',key:'country',as:'countryCode'}},
    district: {type:DataTypes.STRING}, 
    population: {type:DataTypes.INTEGER}
  }, {timestamps: false});
  
  return City;
};