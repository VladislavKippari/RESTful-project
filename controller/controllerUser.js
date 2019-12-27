const db = require('../models/index.js');
const config = require('../config/config2.js');
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;
 
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
 
exports.signup = (req, res) => {
  // Save User to Database
  console.log("Processing func -> SignUp");
  User.findOne({
    where: {
      name: req.body.name
     
    }
  }).then(user => {
    if(!user){
      User.findOne({
        where: {
          
          email:req.body.email
        }
      }).then(user=>{
        if(!user){
          User.create({
            name: req.body.name,
            email:  req.body.email,
            password:  bcrypt.hashSync(req.body.password, 8),
            roleId: req.body.roleId,
          });
          res.send("User added!");
        }else{
          res.send("This email in use");
        }
      })
    }else{
      res.send("This username in use");
    }
  
  
}).catch(err => {
    res.status(500).send("Error -> " + err);
  });
  
}

exports.signin = (req, res) => {
  console.log("Sign-In");
  
  User.findOne({
    where: {
      name: req.body.name
    }
  }).then(user => {
    if (!user) {
      return res.status(404).send('User Not Found.');
    }
 
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
    }
    
    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    
    res.status(200).send({token,roleId:user.roleId});
    
  }).catch(err => {
    res.status(500).send('Error -> ' + err);
  });
}
 
exports.userContent = (req, res) => {
  
  User.findOne({
    where: {id: req.id},
  
    attributes: ['name', 'email','roleId'],
    
  }).then(user => {
    res.status(200).json({
      "description": "User Content Page",
      "user": user
    });
  }).catch(err => {
    res.status(500).json({
      "description": "Can not access User Page",
      "error": err
    });
  })
}
 
exports.adminBoard = (req, res) => {
  User.findOne({
    where: {id: req.id},
    attributes: ['name', 'email','roleId']
  
  }).then(user => {
    res.status(200).json({
      "description": "Admin Board",
      "user": user
    });
  }).catch(err => {
    res.status(500).json({
      "description": "Can not access Admin Board",
      "error": err
    });
  })
}
 



