//Made By Bl4ky113

//Variables

var profit;

var data = {
  product: prompt("Ingrese el nombre del producto vendido: "),
  price: parseInt(prompt("Ingrese el precio del producto vendido: ")),
  amount: parseInt(prompt("Ingrese la cantidad de productos vendidos")),
  numSellers: parseInt(prompt("Ingrese el número de vendedores en la venta: ")),

};

var percentage = [
  0.025, //If product price is less than 100k
  0.1,  //If product price is equal or greater than 100k

];

var total = data["price"] * data["amount"];

//Function

document.write("Producto:  ", data["product"], "<br />");
document.write("Precio:  ", data["price"], "<br />");
document.write("Cantidad:  ", data["amount"], "<br />");
document.write("Cantidad de Vendedores:  ", data["numSellers"], "<br />");
document.write("Total Venta:  ", total, "<br /><br />");

if (data["price"] < 100000) {
  var payment = total * percentage[0];
  var profit = total - (payment * data["numSellers"]);
  sellersCommission(payment);

} else if (data["price"] >= 100000) {
  var payment = total * percentage[1];
  var profit = total - (payment * data["numSellers"]);
  sellersCommission(payment);

}
function sellersCommission (payCommission) {
  for (i = 1; i <= data["numSellers"]; i++) {
    document.write("La paga del vendedor número ", i, " es de:  ", payCommission, ". <br />");

  }
  document.write("<br />Ganancias venta:  ", profit);
}
