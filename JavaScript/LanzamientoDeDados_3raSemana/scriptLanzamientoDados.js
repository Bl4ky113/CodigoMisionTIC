//Made by Bl4ky113

//Variables

var diceSetUp = [
  "#555", //Border Color
  "2", //Border Width
  "#ddd", //Background Color
  "#f00", //Circle Color
  "20", //Circle Width and radius

];

//Button SetUp

var buttonStart = document.getElementById("button");
buttonStart.addEventListener("click", rollDaDice);

//Canvas SetUp

var dice_1 = document.getElementById("canvasDice_1");
var drawDice_1 = dice_1.getContext("2d");

var dice_2 = document.getElementById("canvasDice_2");
var drawDice_2 = dice_2.getContext("2d");

//Clear the dice

function diceClear() {
  drawDice_1.fillStyle = diceSetUp[2];
  drawDice_1.fillRect(25, 25, 150, 150);
  drawLine(drawDice_1, diceSetUp[0], diceSetUp[1], 25, 25, 175, 25);
  drawLine(drawDice_1, diceSetUp[0], diceSetUp[1], 25, 25, 25, 175);
  drawLine(drawDice_1, diceSetUp[0], diceSetUp[1], 175, 25, 175, 175);
  drawLine(drawDice_1, diceSetUp[0], diceSetUp[1], 25, 175, 175, 175);

  drawDice_2.fillStyle = diceSetUp[2];
  drawDice_2.fillRect(25, 25, 150, 150);
  drawLine(drawDice_2, diceSetUp[0], diceSetUp[1], 25, 25, 175, 25);
  drawLine(drawDice_2, diceSetUp[0], diceSetUp[1], 25, 25, 25, 175);
  drawLine(drawDice_2, diceSetUp[0], diceSetUp[1], 175, 25, 175, 175);
  drawLine(drawDice_2, diceSetUp[0], diceSetUp[1], 25, 175, 175, 175);


}

diceClear();

//Roll The Dice!!!!

function rollDaDice() {
  var diceValue = {
    value_1: Math.floor( (Math.random() * 6) + 1 ),
    value_2: Math.floor( (Math.random() * 6) + 1 ),

  };
  diceClear();

  console.log(diceValue);

  switch (diceValue["value_1"]) {
    case 1: //Dice_1's face 1
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 100, 100);

    break;
    case 2: //Dice_1's face 2
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 60, 60);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 140, 140);

    break;
    case 3: //Dice_1's face 3
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 100, 100);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 60, 60);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 140, 140);

    break;
    case 4: //Dice_1's face 4
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 60, 60);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 140, 140);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 140, 60);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 60, 140);

    break;
    case 5: //Dice_1's face 5
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 60, 60);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 140, 140);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 140, 60);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 60, 140);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 100, 100);

    break;
    case 6: //Dice_1's face 6
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 60, 50);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 140, 50);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 60, 100);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 140, 100);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 60, 150);
      drawCircle(drawDice_1, diceSetUp[3], diceSetUp[4], 140, 150);

    break;
    default:
      alert("HOW?!");
    break;
  }

  switch (diceValue["value_2"]) {
    case 1: //Dice_2's face 1
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 100, 100);

    break;
    case 2: //Dice_2's face 2
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 60, 60);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 140, 140);

    break;
    case 3: //Dice_2's face 3
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 100, 100);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 60, 60);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 140, 140);

    break;
    case 4: //Dice_2's face 4
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 60, 60);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 140, 140);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 140, 60);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 60, 140);

    break;
    case 5: //Dice_2's face 5
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 60, 60);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 140, 140);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 140, 60);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 60, 140);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 100, 100);

    break;
    case 6: //Dice_2's face 6
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 60, 50);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 140, 50);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 60, 100);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 140, 100);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 60, 150);
      drawCircle(drawDice_2, diceSetUp[3], diceSetUp[4], 140, 150);

    break;
    default:
      alert("HOW?!");
    break;

  }

}

//Canvas function

  //Line Function

function drawLine(dice, color, width, xi, yi, xf, yf) {
  dice.beginPath();
  dice.strokeStyle = color;
  dice.lineWidth = width;
  dice.moveTo(xi, yi);
  dice.lineTo(xf, yf);
  dice.stroke();
  dice.closePath();

}

  //Circle Function

function drawCircle(dice, color, width, x, y) {
  dice.beginPath();
  dice.strokeStyle = color;
  dice.lineWidth = width; //To make a filled circle the width must be 2 times the radius
  dice.arc(x, y, (width / 2), 0, 2 * Math.PI);
  dice.stroke();
  dice.closePath();

}
