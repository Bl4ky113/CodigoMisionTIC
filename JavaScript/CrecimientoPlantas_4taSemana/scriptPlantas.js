//Made By Bl4ky113

//Variables

var infoPlants, totalFamPlants, famPlantNum, tableRow;
var heightCac = [], heightPip = [], heightLil = [];
var i = 1;

  //HtmlObjects Variables
var heightPlantsDiv = document.getElementById("heightDiv");
var labelMaxHeight = document.getElementById("maxHeight");
var mainFunctionDiv = document.getElementById("functionDiv");
var numFamPlant = document.getElementById("numFam_Pl");
var mainFunctionTable = document.getElementById("function_Table");

heightPlantsDiv.style.display = "none";
mainFunctionDiv.style.display = "none";

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

//check function (if cac+lil+pin == numplants) AND set family number

function compareNumPlants(FamilyNum) {
  var totalFamPlants = infoPlants[1] + infoPlants[2] + infoPlants[3];
  if (totalFamPlants == infoPlants[0]) {
    heightPlantsDiv.style.display = "block";
    if (infoPlants[1] > 0) {
      setFamily(0, 1);
      famPlantNum = 1;

    } else if (infoPlants[2] > 0 && infoPlants[1] == 0) {
      setFamily(1, 1)
      famPlantNum = 2;

    } else {
      setFamily(2, 1);
      famPlantNum = 3;

    }
    console.log("Initial: ",famPlantNum);

  } else {
    alert("La cantidad de plantas no es igual a el número de plantas");

  }


}


//Change or Set plant family on DOM

function setFamily(fa, pl) {
  numFamPlant.innerHTML = "Familia: " + familyPlants[fa] + "; Número: " + pl + "; Altura de la planta en Metros: ";
  heightPlants.max = maxHeightPlants[fa];
  labelMaxHeight.innerHTML = "( Altura Maxima " + maxHeightPlants[fa] + " )";

}

//Add plants height function

function submitHeight() {
  console.log(famPlantNum);

    //Submit the height of the plants
  switch (famPlantNum) {
    case 1:
      if (heightPlants.value <= maxHeightPlants[0] && heightPlants.value > 0) {
        heightCac.push(parseFloat(heightPlants.value));
        console.log(heightCac, "cac");

      } else {
        alert("La altura de la planta es mayor a su altura maxima. ");

      }
      heightPlants.value = " ";

    break;
    case 2:
      if (heightPlants.value <= maxHeightPlants[1] && heightPlants.value > 0) {
        heightPip.push(parseFloat(heightPlants.value));
        console.log(heightPip, "pip");

      } else {
        alert("La altura de la planta es mayor a su altura maxima. ");

      }
      heightPlants.value = " ";

    break;
    case 3:
      if (heightPlants.value <= maxHeightPlants[2] && heightPlants.value > 0) {
        heightLil.push(parseFloat(heightPlants.value));
        console.log(heightLil, "lil");

      } else {
        alert("La altura de la planta es mayor a su altura maxima. ");

      }
      heightPlants.value = " ";

    break;
    default:
      alert("how");
      heightPlants.value = "How";

    break;

  }

    //Change the number of the plant and its family on the DOM
  if (i < infoPlants[famPlantNum]) {
    i++;
    setFamily((famPlantNum - 1), i);

  } else {
    if (famPlantNum < 3) {
      famPlantNum++;
      i = 1;
      setFamily((famPlantNum - 1), 1);

    } else {
      heightPlantsDiv.style.display = "none";
      mainFunction(1);

    }

  }

}

//Main Functions

function mainFunction(fam) {
  //Make table for the info
  mainFunctionDiv.style.display = "block";
  if (fam == 1 && infoPlants[1] > 0) {
    for (num = 1; num <= infoPlants[1]; num++) {
      tableRow = mainFunctionTable.insertRow(-1);
      var tableInfo = {
        fp: tableRow.insertCell(0),
        np: tableRow.insertCell(1),
        aip: tableRow.insertCell(2),
        amp: tableRow.insertCell(3),
        cd: tableRow.insertCell(4),
        de: tableRow.insertCell(5),

      };

      tableInfo.fp.innerHTML = familyPlants[0];
      tableInfo.np.innerHTML = num;
      tableInfo.aip.innerHTML = heightCac[num - 1];
      tableInfo.amp.innerHTML = maxHeightPlants[0];
      tableInfo.cd.innerHTML = growthPercentage[0];
      tableInfo.de.innerHTML = calculateDE(0, num);

    }
    mainFunction(2);

  } else if (fam == 2 && infoPlants[2] > 0) {
    for (num = 1; num <= infoPlants[2]; num++) {
      tableRow = mainFunctionTable.insertRow(-1);
      var tableInfo = {
        fp: tableRow.insertCell(0),
        np: tableRow.insertCell(1),
        aip: tableRow.insertCell(2),
        amp: tableRow.insertCell(3),
        cd: tableRow.insertCell(4),
        de: tableRow.insertCell(5),

      };
      tableInfo.fp.innerHTML = familyPlants[1];
      tableInfo.np.innerHTML = num;
      tableInfo.aip.innerHTML = heightPip[num - 1];
      tableInfo.amp.innerHTML = maxHeightPlants[1];
      tableInfo.cd.innerHTML = growthPercentage[1];
      tableInfo.de.innerHTML = "a";

    }
    mainFunction(3);

  } else if (fam == 3 && infoPlants[3] > 0){
    for (num = 1; num <= infoPlants[3]; num++) {
      tableRow = mainFunctionTable.insertRow(-1);
      var tableInfo = {
        fp: tableRow.insertCell(0),
        np: tableRow.insertCell(1),
        aip: tableRow.insertCell(2),
        amp: tableRow.insertCell(3),
        cd: tableRow.insertCell(4),
        de: tableRow.insertCell(5),

      };
      tableInfo.fp.innerHTML = familyPlants[2];
      tableInfo.np.innerHTML = num;
      tableInfo.aip.innerHTML = heightLil[num - 1];
      tableInfo.amp.innerHTML = maxHeightPlants[2];
      tableInfo.cd.innerHTML = growthPercentage[2];
      tableInfo.de.innerHTML = "e";

    }

  } else {
    alert("HOW");

  }

}

//Get the waiting days or D.E (días de espera)

function calculateDE(family, number) {
  var daysCac = [], daysPip = [], daysLil = [];
  daysCac[number - 1] = 0;

  switch (family) {
    case 0:
        var result = heightCac;
        while (result[number - 1] <= maxHeightPlants[family]) {
          result[number - 1] += result[number - 1] * growthPercentage[family];
          daysCac[number - 1]++;
          console.log(result);
        }
        console.log(daysCac);
        return daysCac[number - 1];

    break;
    case 2:


    break;
    case 3:


    break;
    default:

    break;

  }

}
