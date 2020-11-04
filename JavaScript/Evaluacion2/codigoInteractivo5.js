//Made By Bl4ky113

//Variables

var product = {
  name: prompt("Ingrese el nombre del producto que vendío: "),
  price: prompt("Ingrese el precío del producto que vendío (por unidad): "),
  code: parseInt(prompt("Ingrese el código del producto que vendío: ")),   //Codigo1 < 10; Codigo2 > 10 && < 20; Codigo3 > 20 && < 30;
  sales: parseInt(prompt("Ingrese la cantidad de ventas del producto: ")),

};

var codesCommission = [
  0.05, //Code 1: 5%
  0.08, //Code 2: 8%
  0.03, //Code 3: 3%

];

var commission, totalSale;

console.log(product);

//function

switch (true){
  case (product["code"] <= 10):
    commission = (product["sales"] * product["price"]) * codesCommission[0];
    totalSale = product["sales"] * product["price"]; //This in not used in the program, but i wanted to know how much the workers were selling
    document.write("Su comisión por esta venta es de:  ", commission, "\n ¡Muchas Gracias por vender nuestra mercancía!");
    console.log(totalSale);

  break;
  case (product["code"] > 10 && product["code"] <= 20):
    commission = (product["sales"] * product["price"]) * codesCommission[1];
    totalSale = product["sales"] * product["price"]; //This in not used in the program, but i wanted to know how much the workers were selling
    document.write("Su comisión por esta venta es de:  ", commission, "\n ¡Muchas Gracias por vender nuestra mercancía!");
    console.log(totalSale);

  break;
  case (product["code"] > 20 && product["code"] <=30):
    commission = (product["sales"] * product["price"]) * codesCommission[2];
    totalSale = product["sales"] * product["price"]; //This in not used in the program, but i wanted to know how much the workers were selling
    document.write("Su comisión por esta venta es de:  ", commission, "\n ¡Muchas Gracias por vender nuestra mercancía!");
    console.log(totalSale);

  break;
  default:
    document.write("EL código del producto no esta registrado en el programa\nVuelva a intentar")

  break;

}
