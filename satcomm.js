net = require('net');
function SatComm(host, port) {
  host = host || "localhost";
  port = port || 3000;

  // Sends some data 
  this.send = function (data, callback) {
    // Open a new socket connection for each request
    var sat = net.connect( {host: host, port: port}, function() {
      console.log("Connected to satellite, sending data " + data);
      sat.write(data);
    });

    res = '';
    sat.on('data', function(data) {
      res += data.toString();
      console.log("Got chunk!");
    });

    sat.on('end', function() {
      console.log("Connection to satellite closed.");
      if(typeof callback === "function") {
        callback(null, res);
      }
    });
  }
}

module.exports = SatComm;
