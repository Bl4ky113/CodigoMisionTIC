//Made By Bl4ky113

//Variables

var infoPlants = [];
var totalFamPlants;

var numFamPlant = document.getElementById("numFam_Pl");

  //Plants Inputs
var numPlants = document.getElementById("numPl");
var numCacPlants = document.getElementById("famCacPl");
var numPinPlants = document.getElementById("famPinPl");
var numLilPlants = document.getElementById("famLilPl");
var heightPlants = document.getElementById("heightPl");

  //Button Inputs
var checkButton = document.getElementById("checkBtn");

  //Plants Events (if change then upload the Info)
numPlants.addEventListener("change", uploadInfo);
numCacPlants.addEventListener("change", uploadInfo);
numPinPlants.addEventListener("change", uploadInfo);
numLilPlants.addEventListener("change", uploadInfo);
heightPlants.addEventListener("change", uploadInfo);

  //Button Event (if click then compare totalFamPlants and numPlants)
checkButton.addEventListener("click", compareNumPlants);

  //Upload Plants info
function uploadInfo() {
  infoPlants = [
    parseInt(numPlants.value), //Number of plants
    parseInt(numCacPlants.value), //Number of Cactácedas plants
    parseInt(numPinPlants.value), //Number of Pináceas plants
    parseInt(numLilPlants.value), //Number of Liliáceas plants

  ];
  console.log(infoPlants);

}

//check function (if cac+lil+pin == numplants)

function compareNumPlants() {
  var totalFamPlants = infoPlants[1] + infoPlants[2] + infoPlants[3];
  if (totalFamPlants == infoPlants[0]) {


  }

}

/*function equalPlants() {
  if (totalFamPlants == infoPlants["num"]) {
    console.log("a")

  } else {
    console.log("Not a");

  }

}*/
