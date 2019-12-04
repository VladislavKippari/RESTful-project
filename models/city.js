'use strict';
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  const City = sequelize.define('City', {
    id: {
      type: DataTypes.INTEGER,

=======
  const City = sequelize.define('Citys', {
    id: {
      type: DataTypes.INTEGER,
     
>>>>>>> 5b9316306e2ad7d1d89f249ba3172cca293645a3
      unique: true,
      primaryKey: true
  },
    name: {type:DataTypes.STRING},
    countryCode: {type:DataTypes.STRING,references:{model:'country',key:'country',as:'countryCode'}},
    district: {type:DataTypes.STRING}, 
    population: {type:DataTypes.INTEGER}
<<<<<<< HEAD
  }, {timestamps: false, freezeTableName:true});
=======
  }, {timestamps: false});
  
>>>>>>> 5b9316306e2ad7d1d89f249ba3172cca293645a3
  return City;
};