
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const mysqll = require('mysql');
require('./router/router.js')(app);
const db = require('./models/index.js');
const Role = db.role;
var connection = mysqll.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'world'
  })
  connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
  });


  


// listen for requests
app.listen(5500, () => {
    console.log("Server is listening on port 5500");
});
function initial(){
  Role.create({
    id: 1,
    name: "USER"
  });
  
  Role.create({
    id: 2,
    name: "ADMIN"
  });
  
}