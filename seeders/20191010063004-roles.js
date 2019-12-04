'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Role', [{
      "id": "1",
      "name": "USER"
    },
    {
      "id": "2",
      "name": "ADMIN"
    
  }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Role', null, {});
  }
};
