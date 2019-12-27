const jwt = require('jsonwebtoken');
const config = require('../config/config2.js');
const db = require('../models/index.js');
const Role = db.role;
const User = db.user;
 
verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];
  
  if (!token){
    return res.status(403).send({ 
      auth: false, message: 'No token provided.' 
    });
  }
 
  jwt.verify(token, config.secret, (err, decoded) => {
  
    if (err){
      
      return res.status(500).send({ 
          auth: false, 
          message: 'Fail to Authentication. Error -> ' + err 
        });
    }
    req.id = decoded.id;
    next();
  });
}
 
isAdmin = (req, res, next) => {
  User.findOne({
    where: {id:req.id},
  }).then(user => {
  
          if(user.roleId==2){
            next();
        
            return;
          }

        res.status(403).send("Require Admin Role!");
        return;
     
    })
}
 

const authJwt = {};
authJwt.verifyToken = verifyToken;
authJwt.isAdmin = isAdmin;
 
module.exports = authJwt;