//Made By Bl4ky113

//Variables

var infoPlants, totalFamPlants;
var i = 1;

  //InnerHTML Variables
var divHeightPlants = document.getElementById("heightDiv");
var labelMaxHeight = document.getElementById("maxHeight");
divHeightPlants.style.display = "none";

var numFamPlant = document.getElementById("numFam_Pl");

  //Plants Inputs
var numPlants = document.getElementById("numPl");
var numCacPlants = document.getElementById("famCacPl");
var numPinPlants = document.getElementById("famPinPl");
var numLilPlants = document.getElementById("famLilPl");
var heightPlants = document.getElementById("heightPl");

  //Button Inputs
var checkButton = document.getElementById("checkBtn");
var submitHeightButton = document.getElementById("submitHeightbtn");

  //Plants Variables
var familyPlants = [
  "Cactácedas", //Family 1
  "Pináceas", //Family 2
  "Liliáceas", //Family 3

];

var maxHeightPlants = [
  20, //Cactácedas max meters
  100, //Pináceas max meters
  4, //Liliáceas max meters

];

var growthPercentage = [
  0.02, //Cactácedas growth percentage
  0.10, //Pináceas growth percentage
  0.03, //Liliáceas growth percentage

];


  //Plants Events (if change then upload the Info)
numPlants.addEventListener("change", uploadInfo);
numCacPlants.addEventListener("change", uploadInfo);
numPinPlants.addEventListener("change", uploadInfo);
numLilPlants.addEventListener("change", uploadInfo);

  //Button Event
checkButton.addEventListener("click", compareNumPlants);
submitHeightButton.addEventListener("click", submitHeight);

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

function compareNumPlants(FamilyNum) {
  var totalFamPlants = infoPlants[1] + infoPlants[2] + infoPlants[3];
  if (totalFamPlants == infoPlants[0]) {
    divHeightPlants.style.display = "block";
    if (infoPlants[1] > 0) {
      setFamily(0, 1);
      return 1;
    } else if (infoPlants[2] > 0 && infoPlants[1] == 0) {
      setFamily(1, 1)
      return 2;
    } else {
      setFamily(2, 1);
      return 3;
    }

  } else {
    alert("La cantidad de plantas no es igual a el número de plantas");

  }

}

//Change or Set plant family

function setFamily(fa, pl) {
  numFamPlant.innerHTML = "Familia: " + familyPlants[fa] + "; Número: " + pl + "; Altura de la planta en Metros: ";
  heightPlants.max = maxHeightPlants[fa];
  labelMaxHeight.innerHTML = "( Altura Maxima " + maxHeightPlants[fa] + " )";

}

//Add plants height function

function submitHeight() {
  var famPlantNum = compareNumPlants();
  if (i < infoPlants[famPlantNum]) {
    i++;
    setFamily((famPlantNum - 1), i);
  } else {
    alert("fin");

  }

}
  /*for (i = 0;i <= infoPlants[]) {
    numFamPlant.innerHTML = "Familia: " + familyPlants[family] + "; Número: " + i + "; Altura de la planta en Metros: ";
    i = i + 1;

  }*/
