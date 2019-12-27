const db = require('../models/index.js');
const Sequelize = require('sequelize');
const City = db.city;
const Op = Sequelize.Op;

exports.cityContentAll = (req, res) =>
{
    City.findAll({
        attributes:['name','countryCode']
    }).then(city => {
        res.status(200).json({
          
          "city": city
        });
      }).catch(err => {
        res.status(500).json({
          "description": "Cant find any countries",
          "error": err
        });
    })
}

exports.cityContentCityByPopulation = (req, res) =>
{
  City.findAll({
    where: {population: {[Op.gte]: 1000000}},
    attributes: ['id','countryCode','name', 'population']
  }).then(city => {
    res.status(200).json({
      
      "city": city
    });
  }).catch(err => {
    res.status(500).json({
      "description": "Cant find any cities",
      "error": err
    });
  })
}

exports.addCity = (req, res) => {
    City.create({
        id: req.body.id,
        name: req.body.name,
        countryCode: req.body.countryCode,
        district: req.body.district,
        population: req.body.population
    }).then(city =>{
        res.status(200).send("City has been added successfully");
    }).catch(err =>{
        res.status(500).send("Error: " + err);
    });
}

exports.updateCity = (req, res) => {
    City.update({name: req.body.name},{
        where: {id: req.params.id}
    }).then(city =>{
        res.status(200).send("City updated successfully");
    }).catch(err =>{
        res.status(500).send("Error: " + err);
    });
}

exports.deleteCity = (req,res) =>{
    City.destroy({
        where: {id: req.params.id}
    }).then(city =>{
        res.status(200).send("City has been deleted successfully");
    }).catch(err =>{
        res.status(500).send("Error: " + err);
    });
}
