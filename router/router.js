const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
var express = require('express')
var cors = require('cors')
var app = express()

const controllerUser = require('../controller/controllerUser.js');
const controllerContry = require('../controller/controllerCountry.js');
const controllerCity = require('../controller/controllerCity.js');
module.exports = (app) => {
 
  app.use(cors())
  app.post('/api/auth/signup', controllerUser.signup);

  app.post('/api/auth/signin', controllerUser.signin);

  app.get('/api/content/user', [authJwt.verifyToken], controllerUser.userContent);

  app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controllerUser.adminBoard);

  app.get('/api/world/country/all',controllerContry.countryContentAll);

  app.get('/api/world/country/continent/:continent', controllerContry.countryContentByContinent);
  app.get('/api/world/country/:code', controllerContry.countryContentByCode);

  app.get('/api/world/country/:name/city/all', controllerContry.countryContentCityByCountry);

  app.get('/api/world/country/city/population', controllerCity.cityContentCityByPopulation);

  app.get('/api/world/country/city/all', controllerCity.cityContentAll);

  app.post('/api/world/country/city/add', controllerCity.addCity);

  app.put('/api/world/country/city/update/:id', controllerCity.updateCity);

  app.delete('/api/world/country/city/delete/:id', controllerCity.deleteCity);
}