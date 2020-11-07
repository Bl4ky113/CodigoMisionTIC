//Made By Bl4ky113

var results;
var add = 0;
var evenNum = [];

for (i = 1;i <= 29; i++) {
  if (i%2 == 0) {
    evenNum.push(i);
    add = add + i;
    results = {
      square: i ** 2,
      cube: i ** 3,
      average: add / evenNum.length,

    };
    document.write("The Square of the ", i, " number is  ", results["square"], "  ;and its cube is:  ", results["cube"], ". <br />");
    console.log("Square: ", results["square"], "Cube:  ", results["cube"])
  }

}

document.write("The average is:  ", results["average"], " of the ", evenNum.length, " numbers.")
console.log("Average:  ", results["average"]);
