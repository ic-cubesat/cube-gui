net = require('net');
function SatComm(host, port) {
  host = host || "localhost";
  port = port || 3000;

  // Sends some data 
  this.send = function (data, callback) {
    // Open a new socket connection for each request
    var sat = net.connect( {port: port}, function() {
      console.log("Connected to satellite, sending data " + data);
      sat.write(data);
    });

    sat.on('data', function(data) {
      console.log("Satellite response: " + data.toString());
      if(typeof callback === "function") {
        callback(null, data.toString());
      }

      console.log("Terminating satellite connection");
      sat.end();
    });

    sat.on('end', function() {
      console.log("Connection to satellite closed.");
    });
  }
}

module.exports = SatComm;
