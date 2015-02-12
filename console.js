window.onload = function () {
  setInterval(updateTime, 1000);
}

function handle_input(e){
	if(e.keyCode === 13){
	    var console_output = document.getElementById("console_output");
	    var console_input = document.getElementById("console_input");
	    console_output.innerHTML += "<div>"+console_input.value+"</div>";
	    console_input.value = "";
	}
}

function updateTime(){
document.getElementById("Date").innerHTML = new Date().toLocaleString();
}

setInterval(updateTime,1000);
