//Made By Bl4ky113;

//Funcion 2do Boton

var boton = document.getElementById("boton2doCodigo");
boton.addEventListener("click", funcionBoton);

function funcionBoton() {
  rdio = parseFloat(prompt("Digite el radio de su circuferencia"));

//Operaciones

  document.write("El radio de su circuferencia es de: ", rdio);
  document.write("<br />", "El Area de su circuferencia es de : ", 3.1416*rdio**2);

}
