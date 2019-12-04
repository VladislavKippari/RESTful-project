'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Country', {

      code: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true
      },
      
      name: {
        type: Sequelize.STRING
      },
      continent: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      surfacearea: {
        type: Sequelize.INTEGER
      },
      indepyear: {
        type: Sequelize.INTEGER
      },
      population: {
        type: Sequelize.INTEGER
      },
      lifeexpectancy: {
        type: Sequelize.INTEGER
      },
      gnp: {
        type: Sequelize.INTEGER
      },
      gnpold: {
        type: Sequelize.INTEGER
      },
      localname: {
        type: Sequelize.STRING
      },
      governmentform: {
        type: Sequelize.STRING
      },
      headofstate: {
        type: Sequelize.STRING
      },
      capital: {
        type: Sequelize.INTEGER
      },
      code2: {
        type: Sequelize.STRING
      }
    }).then(function() {
      queryInterface.createTable('City', {
        id: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
      
        name: {
          type: Sequelize.STRING
        },
        countryCode: {
          type: Sequelize.STRING,
          references: { model: 'Country', key: 'code' }
        },
        district: {
          type: Sequelize.STRING
        },
        population: {
          type: Sequelize.INTEGER
        }
      })
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Country');
  
  }
};