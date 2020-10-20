//Made By Bl4ky113;

//Inicio

document.write("<h1>", "Bienvenido a una Calculadora primitiva", "</h1>");

// Creación de los numeros.

var num1 = parseInt(prompt("Ingresa un número de tu elección"));
var num2 = parseInt(prompt("Ingresa otro número de tu elección"));

// Menu de opciones

document.write("<br />", "<p>", "Listo! tus números son: ", num1, ' y ', num2, "</p>");
document.write("<br />", "<p>", "Puedes elegir entre: ");
document.write("<br />", "Opción N°1: Sumar los números");
document.write("<br />", "Opción N°2: Restar los números");
document.write("<br />", "Opción N°3: Multiplicar los números");
document.write("<br />", "Opción N°4: Dividir los números", "</p>");

setTimeout(elegirOpcion, 10000);

function elegirOpcion() {
  var opcion = parseInt(prompt("Igresa la acción que quieras realizar"));
  switch (opcion) {
    case 1:
      var operacion = num1 + num2;
      document.write("<br />", "<h2>", "Su resultado de suma es:  ", operacion, "</h2>");
    break;
    case 2:
      var operacion = num1 - num2;
      document.write("<br />", "<h2>", "Su resultado de resta es:  ", operacion, "</h2>");
    break;
    case 3:
      var operacion = num1 * num2;
      document.write("<br />", "<h2>", "Su resultado de multiplicación es:  ", operacion, "</h2>");
    break;
    case 4:
      var operacion = num1 / num2;
      document.write("<br />", "<h2>", "Su resultado de división es:  ", operacion, "</h2>");
    break;
    default:
      document.write("<br />", "<p>", "La operacion elegida no es una operación programada", "</p>");
    break;
  }
}
