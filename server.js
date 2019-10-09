
const express = require('express');
const bodyParser = require('body-parser');

const mysqll = require('mysql');
var connection = mysqll.createConnection({
    host: 'localhost',
    user: 'vlad',
    database: 'world'
  })
  connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
  })
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/wtf', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// listen for requests
app.listen(5500, () => {
    console.log("Server is listening on port 5500");
});