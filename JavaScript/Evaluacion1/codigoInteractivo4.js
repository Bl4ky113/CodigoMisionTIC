//Made By Blaky113

//Funcion 4to boton

var boton = document.getElementById("boton4toCodigo");
boton.addEventListener("click", funcionBoton);

function funcionBoton() {
  num1 = parseInt(prompt("Digite el 1er Numero"));
  num2 = parseInt(prompt("Digite el 2do Numero"));
  num3 = parseInt(prompt("Digite el 2er Numero"));

  document.write("Los numeros digitados son: ", num1, ', ', num2, ' y ', num3);

//Operaciones

  document.write("<br />", "El cuadrado de la suma de los numeros es igual a: ", (num1 + num2 + num3)**2);
  document.write("<br />", "El productos de los numeros es igual a: ", num1 * num2 * num3);
  document.write("<br />", "El cubo del producto de los numeros es igual a:", (num1 * num2 * num3)**3);
  document.write("<br />", "La diferencia entre el cuadrado de la suma y el cubo del producto es igual a: ", ((num1 + num2 + num3)**2) - ((num1 * num2 * num3)**3));

}
