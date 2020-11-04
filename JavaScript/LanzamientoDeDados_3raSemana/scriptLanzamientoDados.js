//Made by Bl4ky113

//Button and Canvas SetUp

//Button

var buttonStart = document.getElementById("button");
buttonStart.addEventListener("click", buttonFunction);

//Button function

function buttonFunction() {
  alert("ass")

}

//Canvas

var dice_1 = document.getElementById("canvasDice_1");
var drawDice_1 = dice_1.getContext("2d");

var dice_2 = document.getElementById("canvasDice_2");
var drawDice_2 = dice_2.getContext("2d");

//Canvas function

function drawLine(dice, color, width, xi, yi, xf, yf) {
  dice.beginPath();
  dice.strokeStyle = color;
  dice.lineWidth = width;
  dice.moveTo(xi, yi);
  dice.lineTo(xf, yf);
  dice.stroke();
  dice.closePath();

}

drawLine(drawDice_1, "white", 10, 0, 0, 100, 100);
