# Modified By Bl4ky113
document.write("<h1><center>Este programa calcula el promedio de días que debe estar una planta en un invernadero</h1></center>");
var nPlantas=1;var promedioD=0;
var crecimiento,Tmaximo,tasa;
do{
  var fmla=parseInt(prompt("Inserte la familia a la que pertenece la planta(1-3)"));
  if(fmla==1||fmla==2||fmla==3){
    var Tinicial=parseFloat(prompt("Inserte el tamaño de la planta(en metros)"));
    if(fmla==1&&Tinicial<20||fmla==2&&Tinicial<100||fmla==3&&Tinicial<4){
      switch(fmla){
        case 1:
          Tmaximo=20;tasa=0,02;break;

        case 2:
          Tmaximo=100;tasa=0,1;break;

        case 3:
          Tmaximo=4;tasa=0,03;break;

        default:
          document.write("<h3>Error</h3>")

      }
    nPlantas++;

    } else{
      var Tinicial=parseFloat(prompt("Inserte el tamaño de la planta(en metros)"));
      var fmla=parseInt(prompt("Inserte la familia a la que pertenece la planta(1-3)"));

      }
  } else{
      var fmla=parseInt(prompt("Inserte la familia a la que pertenece la planta(1-3)"));

    }
  do{
    crecimiento=(Tinicial+(Tinicial*tasa));
    promedioD++;

  } while(crecimiento<=Tmaximo){
    document.write("<br",promedioD,"</br>")

    }
} while(nPlantas<=2){

  }

var c1 = parseInt(promp("(1)Amarillo,(2)Azul,(3)Rojo y (4)Blanco"));
var c2 = parseInt(promp("(1)Amarillo,(2)Azul(3)Rojo y (4)Blanco"));
var combinacion
switch(c1){
    case 1:
        ;break;
    case 2:
       ; break;
    case 3:
       ; break;
    case 4:
        ;break;
    default:
        document.write("X")
}
document.write("El resultado de la combinación es",)
