var fs = require('fs')
  , express = require('express')
  , http = require('http')
  , config = require('./config.json')
  , SatComm = require('./satcomm');

//var storage = new Storage('database.json');
var cubesat = new SatComm('localhost', 3000);
var app = express();
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/console', function(req, res) {
  res.sendFile(__dirname + '/public/input.html');
});

// Route for commands
app.post('/command', function(req, res) {
  var command = req.query.command;
  console.log('Transmitting command ' + command);
 
  // TODO: Better make sure the command is valid here
  cubesat.send(command, function(err, reply) {
    res.send(JSON.stringify({err: err, reply: reply}));
  });
});

app.use(express["static"]('public'));

var server = http.createServer(app).listen(config.port);
console.log("Server running on port " + config.port);

// TODO add command for requesting latest image
// TODO add command for requesting current position
