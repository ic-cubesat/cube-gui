var fs = require('fs')
  , express = require('express')
  , http = require('http')
  , config = require('./config.json');

var app = express();
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/console', function(req, res) {
  res.sendFile(__dirname + '/public/input.html');
});

app.use(express["static"]('public'));

http.createServer(app).listen(config.port);
console.log("Server running on port " + config.port);
