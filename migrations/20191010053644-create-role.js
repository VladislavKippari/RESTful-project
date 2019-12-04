'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Role', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      name: {
        type: Sequelize.STRING
      }
    }).then(function() {
      queryInterface.createTable('User', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING,
          unique: true
        },
        password: {
          type: Sequelize.STRING
        },roleId: {
          type: Sequelize.INTEGER,
          references: { model: 'Role', key: 'id' }
        }
      })
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User');
   
  }
};