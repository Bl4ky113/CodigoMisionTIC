//Made By Bl4ky113

//Variables

var num;

num = prompt("Ingrese un número");

var lengNum = num.length;

console.log(lengNum);

//Function

switch (true) {
  case (lengNum < 1):
    document.write("El número debe tener minimo un dígito\nRecarge la pagina y vuelva a intentar");

  break;
  case (lengNum == 1):
    document.write("El número: ", num, " es un número de ", lengNum, " dígito");

  break;
  case (lengNum == 2):
    document.write("El número: ", num, " es un número de 2 dígitos");

  break;
  case (lengNum == 3):
    document.write("El número: ", num, " es un número de 3 dígitos");

  break;
  case (lengNum == 4):
    document.write("El número: ", num, " es un número de 4 dígitos");

  break;
  case (lengNum > 4):
    document.write("El número: ", num, " debe tener menos de 4 dígitos\nRecarge la pagina y vuelva a intentar");

  break;
  default:
    document.write("¿Cómo carajo pudiste activar esto?");

  break;

}
