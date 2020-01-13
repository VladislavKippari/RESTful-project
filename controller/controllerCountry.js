const db = require('../models/index.js');
const Country = db.country;
const City = db.city;

exports.countryContentAll = (req, res) =>
{
    Country.findAll({
        attributes:['code','name','continent','region','surfacearea','indepyear','population','lifeexpectancy','gnp','gnpold','localname','governmentform','headofstate','capital','code2']
    }).then(country => {
        res.status(200).json({
         
          country
        });
      }).catch(err => {
        res.status(500).json({
          "description": "Cant find any countries",
          "error": err
        });
    })
}
exports.countryContentByCode = (req, res) =>
{
    Country.findAll({
      where: {code: req.params.code},
        attributes:['code','name']
    }).then(country => {
        res.status(200).json({
         
          country
        });
      }).catch(err => {
        res.status(500).json({
          "description": "Cant find any countries",
          "error": err
        });
    })
}

exports.countryContentByContinent = (req, res) =>
{
    Country.findAll({
        where: {continent: req.params.continent},
        attributes:['code', 'name']
    }).then(country => {
        res.status(200).json({
          "description": "List of founded countries",
          "country": country
        });
      }).catch(err => {
        res.status(500).json({
          "description": "Cant find any countries",
          "error": err
        });
    })
}

exports.countryContentCityByCountry = (req, res) =>
{
  City.findAll({
    attributes: ['id','countryCode', 'name'],
    include: [{
      model: Country,
      attributes: ['name'],
      where: {name: req.params.name}
    }]
  }).then(city => {
    res.status(200).json({
      "description": "List of all "+req.params.name+" cities",
      "user": city
    });
  }).catch(err => {
    res.status(500).json({
      "description": "Cant find any cities",
      "error": err
    });
  })
}
