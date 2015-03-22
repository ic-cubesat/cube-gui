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

var net = require('net');
// Route for commands
app.post('/commands/tmpread', function(req, res) {
  console.log('  Received command TMP_READ');
  var client = net.connect(
                {port: 3000},
                function() { //'connect' listener
                  console.log('  --> Connected to FakeSat!');
                  client.write('TMP_READ');
                });

  client.on('data', function(data) {
    console.log('  --> FakeSat response: ' + data.toString());
    res.send(data);
    client.end();
  });

  client.on('end', function() {
    console.log('  --> Closing connection to FakeSat!');
  });
});

app.use(express["static"]('public'));

var server = http.createServer(app).listen(config.port);
console.log("Server running on port " + config.port);

// TODO add command for requesting latest image
// TODO add command for requesting current position
