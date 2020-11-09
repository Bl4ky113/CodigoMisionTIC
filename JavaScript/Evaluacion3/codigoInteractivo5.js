//Made By Bl4ky113

//Variables

var factor;
var num = 1;

//Function

document.write("<h1> Tabla del ", 1, ". </h1> <br />")

for (factor = 1; factor <= 10; factor++) {
  var result = num * factor;

  //Print results

  console.log("Result: ", result, "; factor: ", factor);
  document.write(num, " X ", factor, " = ", result, ". <br />");

  if (factor == 10 && num < 10){
    document.write("<h1> Tabla del ", num + 1, ". </h1> <br />");
    num = num + 1;
    factor = 0;

  }

}
