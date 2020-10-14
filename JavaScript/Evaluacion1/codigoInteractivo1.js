//Made By BL4ky113;

//Funcion 1er boton

var boton = document.getElementById("boton1erCodigo");
boton.addEventListener("click", funcionBoton);

function funcionBoton() {
  num1 = parseInt(prompt("Digite el primer numero entero:  "));
  num2 = parseInt(prompt("Digite el segundo numero entero:  "));

document.write("Los numeros elegidos son: ", num1, " y ", num2);

//Operaciones

document.write("<br />", "Los numeros sumados es igual a: ", num1 + num2);
document.write("<br />", "Los numeros restados es igual a: ", num1 - num2);
document.write("<br />", "Los numeros multiplicados es igual a: ", num1 * num2);
document.write("<br />", "Los numeros divididos es igual a: ", num1 / num2);
document.write("<br />", "Los numeros potenciados es igual a: ", num1 ** num2);
}
