//Made By Bl4ky113

//Variables

var num1, num2, num3;

num1 = parseInt(prompt("Ingrese un número"));
num2 = parseInt(prompt("Ingrese otro número"));
num3 = parseInt(prompt("Ingrese el ultimo número"));

//Function

if (num1 > num2 && num2 > num3 || num3 > num2 && num2 > num1) {
  document.write("Los números que ingreso, se ingresaron de una forma ordenada");

} else {
  document.write("Los números que ingreso, se ingresaron de una forma desordenada");
}
