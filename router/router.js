const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
 
module.exports = function(app) {
 
    const controller = require('../controller/controllerUser.js');
 
  app.post('/api/auth/signup', controller.signup);

  
  app.post('/api/auth/signin', controller.signin);

  app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);

  app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
}