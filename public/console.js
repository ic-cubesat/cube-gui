window.onload = function () {
  setInterval(updateTime, 1000);
}

function sendCommand() {
  console.log('Sending request');
  var req = new XMLHttpRequest();
  // XXX change request based on command type
  req.open('POST', '/commands/tmpread', false);
  req.send();
  return req.responseText;
}

function handle_input(e){
	if(e.keyCode === 13){
	    var console_output = document.getElementById("console_output");
	    var console_input = document.getElementById("console_input");
	    console_output.innerHTML += "<div>"+console_input.value+"</div>";
	    console_input.value = "";
      // XXX parse console input to find command type and params
      // for now just assume the command is a temp read
      var response = sendCommand();
      console_output.innerHTML += "<div> >"+response + "</div>";
	}
}

function updateTime(){
document.getElementById("Date").innerHTML = new Date().toLocaleString();
}

setInterval(updateTime,1000);
