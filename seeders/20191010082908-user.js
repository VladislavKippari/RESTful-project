'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      "id": "1",
      "name": "adamgkz",
      "email": "adam@grokonez.com",
      "roleId": "1",
      "password": "$2a$08$qJts8G2RD7/J6RJGIPKxRuAKJTI1.C0WK93cvPQY0xutx6DWXv.PW"
    
  }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
