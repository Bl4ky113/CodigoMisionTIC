//Made By Bl4ky113

//Funcion Boton

var boton = document.getElementById("boton5toCodigo");
boton.addEventListener("click", funcionBoton);

function funcionBoton() {
  cod = Math.floor((Math.random() * 200));
  name = prompt("Ingrese sus nombres y apellidos: ");
  nt1 = parseFloat(prompt("Ingrese su primera nota: "));
  nt2 = parseFloat(prompt("Ingrese su segunda nota: "));
  nt3 = parseFloat(prompt("Ingrese su tercera nota: "));

  //Salida de Información y Operaciones

  document.write("Su código de estudiante es: N°", cod);
  document.write("<br />", "Nombres y Apellidos del estudiante: ", name);
  document.write("<br />", "Notas del estudiante: ", nt1, ', ', nt2, ' y ', nt3);

  document.write("<br />", "Su promedio academico es de: ", (nt1 + nt2 + nt3)/3, " de un maximo de 5.0")

  //¿Castigo o Recompensa?

  if((nt1 + nt2 + nt3)/3 == 5) {
    document.write("<br />", "<h1>", "¡¡¡¡Felicidades Has Obtenido Un Promedio Académico ", "<em>", "PERFECTO", "</em>", "!!!!", "</h1>");

  }
  else if ((nt1 + nt2 + nt3)/3 < 4.9 && (nt1 + nt2 + nt3)/3 >= 4.5) {
    document.write("<br />", "<h1>", "¡Felicidades! Has obtenido un excelente promedio Académico", "</h1>");

  }
  else if((nt1 + nt2 + nt3)/3 < 4.5 && (nt1 + nt2 + nt3)/3 >= 4) {
    document.write("<br />", "<h2>", "Bien Hecho. Has obtenido un buen promedio Académico", "</h2>");

  }
  else if ((nt1 + nt2 + nt3)/3 < 3.9 && (nt1 + nt2 + nt3)/3 >= 3) {
    document.write("<br />", "<h2>", "Has podido pasar con tu promedio académico, pero intenta esforzarte un poco más", "<h2>");

  }
  else if((nt1 + nt2 + nt3)/3 < 2.9 && (nt1 + nt2 + nt3)/3 >= 2) {
    document.write("<br />", "<p>", "Intenta mejorar para pasar con tu promedio académico", "</p>");


  }
  else if((nt1 + nt2 + nt3)/3 < 1.9 && (nt1 + nt2 + nt3)/3 >= 1) {
    document.write("<br />", "<p>", "Debes mejorar para pasar con tu promedio académico", "</p>");

  }
  else if ((nt1 + nt2 + nt3)/3 < 0.9 && (nt1 + nt2 + nt3)/3 >= 0) {
    document.write("<br />", "<p>", "Debes mejorar demasiado para pasar con tu promedio, piensa que tan triste debe estar tu madre", "</p>");
  }
}
