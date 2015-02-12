function updateTime(){
  document.getElementById("Date").innerHTML = new Date().toLocaleString();
}

window.onload = function () {
  setInterval(updateTime, 1000);

  console.log("Hello World");
  var canvas = document.getElementById("map");
  var context = canvas.getContext("2d"); // returns a CanvasRenderingContext2D
  var imageObj = new Image();

  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, 800, 399);
    //context.drawImage(imageObj,0,0);
    draworbit();
  };
  imageObj.src = 'earth.jpg';
  context.fillStyle = '#009933';
  //var satelliteCoordinates;
  draworbit = function () {
    for(var i = 0; i < 800; i++)
      context.fillRect(i,200 + 150*Math.sin((0.888)*Math.PI*i/180),2,2);
  }
}
