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
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      "id": "30",
      "name": "Admin",
      "email":"email@mail.ru",
      "password":"$2y$10$MI6XvxKtwiPM3JpGIC6z0.0pMtRydmEhXKgpAkfNmbNIz3M6LVCc2",
      "roleId":2
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
