//Made By Bl4ky113;

//Funcion 3er boton

var boton = document.getElementById("boton3erCodigo");
boton.addEventListener("click", funcionBoton);

function funcionBoton() {
  faren = parseFloat(prompt("Digite la temperatura en °F: "));

//Operaciones

  document.write("La temperatura en °F es de: ", faren);
  document.write("La temperatura en °C es de: ", 5 / 9 * (faren - 32));

}
