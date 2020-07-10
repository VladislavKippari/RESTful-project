const db = require('../models/index.js');
const Sequelize = require('sequelize'); 
const op = Sequelize.Op;

const Country = db.country;
const City = db.city;

exports.countryContentAll = (req, res) =>
{
    Country.findAll({
      attributes:['code','name','continent','region','surfacearea','indepyear','population','lifeexpectancy','gnp','gnpold','localname','governmentform','headofstate','code2','capital'],
      model:Country,
           include: [{model:City,as:'capitaltown',attributes:[['name','capitalname']],
           where:{id:{[op.col]:'Country.capital'}}

      }],
      
      nest: true,
      raw: true
    }).then(country => {
      
      country.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
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
exports.updateCountry = (req, res) => {
  Country.update({name: req.body.name,continent:req.body.continent,surfacearea:req.body.surfacearea,population:req.body.population},{
      where: {code: req.params.code}
  }) .then(function(rowsUpdated) {
    res.json(rowsUpdated)
  });
 
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
