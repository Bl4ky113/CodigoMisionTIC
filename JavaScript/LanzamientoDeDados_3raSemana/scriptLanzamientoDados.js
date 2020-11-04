//Made by Bl4ky113

//Variables

var diceSetUp = [
  "white", //Border Color
  "2", //Border Width

];

//Button SetUp

var buttonStart = document.getElementById("button");
buttonStart.addEventListener("click", rollDaDice);

//Canvas SetUp

var dice_1 = document.getElementById("canvasDice_1");
var drawDice_1 = dice_1.getContext("2d");

var dice_2 = document.getElementById("canvasDice_2");
var drawDice_2 = dice_2.getContext("2d");

  //1st body of the dice

drawLine(drawDice_1, diceSetUp[0], diceSetUp[1], 25, 25, 175, 25);
drawLine(drawDice_1, diceSetUp[0], diceSetUp[1], 25, 25, 25, 175);
drawLine(drawDice_1, diceSetUp[0], diceSetUp[1], 175, 25, 175, 175);
drawLine(drawDice_1, diceSetUp[0], diceSetUp[1], 25, 175, 175, 175);

  //2nd body of the dice

drawLine(drawDice_2, diceSetUp[0], diceSetUp[1], 25, 25, 175, 25);
drawLine(drawDice_2, diceSetUp[0], diceSetUp[1], 25, 25, 25, 175);
drawLine(drawDice_2, diceSetUp[0], diceSetUp[1], 175, 25, 175, 175);
drawLine(drawDice_2, diceSetUp[0], diceSetUp[1], 25, 175, 175, 175);

//Roll The Dice!!!!

function rollDaDice() {
  var diceValue = {
    value_1: Math.floor( (Math.random() * 6) + 1 ),
    value_2: Math.floor( (Math.random() * 6) + 1 ),

  };

  console.log(diceValue);

  switch (diceValue["value_1"]) {
    case 1:
      alert("test");
    break;
    default:

  }

}

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
