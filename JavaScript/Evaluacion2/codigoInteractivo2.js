//Made By Bl4ky113

//Variables

var num1, num2, num3, numMin;

num1 = parseInt(prompt("Ingrese un Número"));

num2 = parseInt(prompt("Ingrese otro Número"));

num3 = parseInt(prompt("Ingrese el ultimo Número"));

switch (true) {
  case (num1 > num2 && num2 > num3):
    numMin = num3
    document.write("El número menor entre:\n", num1, ", ", num2, " y ", num3, " Es: ", numMin);

  break;
  case (num1 > num3 && num3 > num2):
    numMin = num2
    document.write("El número menor entre:\n", num1, ", ", num2, " y ", num3, " Es: ", numMin);

  break;
  case (num2 > num1 && num1 > num3):
    numMin = num3
    document.write("El número menor entre:\n", num1, ", ", num2, " y ", num3, " Es: ", numMin);

  break;
  case (num2 > num3 && num3 > num1):
    numMin = num1
    document.write("El número menor entre:\n", num1, ", ", num2, " y ", num3, " Es: ", numMin);

  break;
  case (num3 > num1 && num1 > num2):
    numMin = num2
    document.write("El número menor entre:\n", num1, ", ", num2, " y ", num3, " Es: ", numMin);

  break;
  case (num3 > num2 && num2 > num1):
    numMin = num1
    document.write("El número menor entre:\n", num1, ", ", num2, " y ", num3, " Es: ", numMin);

  break;
  default:
    document.write("Vuelva a intentar, porfavor");

  break;
}
