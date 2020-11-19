//Made By Bl4ky113

/*      DOM shortcuts      */

const id = document.getElementById.bind(document);
const log = console.log;

/*      Variables      */

const familyPlants = [
  "Cactácedas", //Family 1
  "Pináceas", //Family 2
  "Liliáceas", //Family 3

];

const maxHeightPlants = [
  20, //Cactácedas max height
  100, //Pináceas max height
  4, //Liliáceas max height

];

const growthPercentage = [
  0.02, //Cactácedas growth percentage
  0.10, //Pináceas growth percentage
  0.03, //Liliáceas growth percentage

];

/*      Upload Plants info      */

  //Plants number Inputs and Events
const numPlants = id("numPl");
numPlants.addEventListener("change", uploadInfo);
const numCacPlants = id("famCacPl");
numCacPlants.addEventListener("change", uploadInfo);
const numPinPlants = id("famPinPl");
numPinPlants.addEventListener("change", uploadInfo);
const numLilPlants = id("famLilPl");
numLilPlants.addEventListener("change", uploadInfo);

var infoPlants; //Var which contain the number of each family plants

function uploadInfo() {
  infoPlants = [
    parseInt(numPlants.value), //Number of plants
    parseInt(numCacPlants.value), //Number of Cactácedas plants
    parseInt(numPinPlants.value), //Number of Pináceas plants
    parseInt(numLilPlants.value), //Number of Liliáceas plants

  ];
  //log(infoPlants);

}

/*      check function      */

const checkButton = id("checkBtn"); //Height button var
checkButton.addEventListener("click", compareNumPlants); //Height button event

const heightPlantsDiv = id("heightDiv"); //Div var
const heightPlants = id("heightPl"); //Input var

var famPlantNum; //Number of the family of the plant

function compareNumPlants(FamilyNum) {
  let totalFamPlants = infoPlants[1] + infoPlants[2] + infoPlants[3];
  if (totalFamPlants == infoPlants[0]) {
    heightPlantsDiv.style.display = "block";
    if (infoPlants[1] > 0) {
      setFamily(0, 1);
      famPlantNum = 1; //Family Cactácedas

    } else if (infoPlants[2] > 0 && infoPlants[1] == 0) {
      setFamily(1, 1)
      famPlantNum = 2; //Family Pináceas

    } else {
      setFamily(2, 1);
      famPlantNum = 3; //Family Liliáceas

    }
    //log("Initial: ",famPlantNum);

  } else {
    alert("La cantidad de plantas no es igual a el número de plantas");

  }


}


/*      Change or Set plant family on DOM      */

function setFamily(fa, pl) {
  const numFamPlant = id("numFam_Pl");
  const labelMaxHeight = id("maxHeight");
  numFamPlant.innerHTML = "Familia: " + familyPlants[fa] + "; Número: " + pl + "; Altura de la planta en Metros: ";
  heightPlants.max = maxHeightPlants[fa];
  labelMaxHeight.innerHTML = "( Altura Maxima " + maxHeightPlants[fa] + " )";

}

/*      Add plants height function      */

const submitHeightButton = id("submitHeightbtn");
submitHeightButton.addEventListener("click", submitHeight);

var heightCac = [], heightPip = [], heightLil = []; //Arrays which contain the height of the plants, of their family
let i = 1; //"loop" variable

function submitHeight() {
  //log(famPlantNum);
  //Submit the height of the plants
  switch (famPlantNum) {
    case 1:
      if (heightPlants.value <= maxHeightPlants[0] && heightPlants.value > 0) {
        heightCac.push(parseFloat(heightPlants.value));
        //log(heightCac, "cac");

      } else {
        alert("La altura de la planta es mayor a su altura maxima.\nO la altura de la planta es igual a 0. ");
        i--; //loop the function, if the user makes a mistake

      }
      heightPlants.value = " ";

    break;
    case 2:
      if (heightPlants.value <= maxHeightPlants[1] && heightPlants.value > 0) {
        heightPip.push(parseFloat(heightPlants.value));
        //log(heightPip, "pip");

      } else {
        alert("La altura de la planta es mayor a su altura maxima.\nO la altura de la planta es igual a 0. ");
        i--; //loop the function, if the user makes a mistake

      }
      heightPlants.value = " ";

    break;
    case 3:
      if (heightPlants.value <= maxHeightPlants[2] && heightPlants.value > 0) {
        heightLil.push(parseFloat(heightPlants.value));
        //log(heightLil, "lil");

      } else {
        alert("La altura de la planta es mayor a su altura maxima.\nO la altura de la planta es igual a 0.");
        i--; //loop the function, if the user makes a mistake

      }
      heightPlants.value = " ";

    break;
    default:
      //log("how");
      heightPlants.value = "How";

    break;

  }

  //Change the number of the plant and its family on the DOM

  if (i < infoPlants[famPlantNum]) {
    i++;
    setFamily((famPlantNum - 1), i);//write on the DOM the family and the "loop" variable

  } else { //If "loop" variable is mayor than number of family plant
    if (famPlantNum < 3) {
      famPlantNum++;
      if (infoPlants[famPlantNum] > 0){
        i = 1;
        setFamily((famPlantNum - 1), 1);

      } else if (infoPlants[famPlantNum + 1] > 0 ) {
        famPlantNum++;
        i = 1
        setFamily((famPlantNum - 1), 1);

      } else { //Alternanite way: two of the 3 families doesn't have plants
        heightPlantsDiv.style.display = "none";
        mainFunction(1);

      }

    } else { //Normal way: all 3 or 2 families, atleast have 1 plant
      heightPlantsDiv.style.display = "none";
      mainFunction(1);

    }

  }

}

/*      Main Functions      */

function mainFunction(fam) {
    //HTML DOM objects variables
  const mainFunctionDiv = id("functionDiv");
  const mainFunctionTable = id("function_Table");
  mainFunctionDiv.style.display = "block";

    //Make table for the info
  if (fam == 1) {
    for (num = 1; num <= infoPlants[fam]; num++) {
      const tableRow = mainFunctionTable.insertRow(-1);
      let tableInfo = {
        fp: tableRow.insertCell(0),
        np: tableRow.insertCell(1),
        aip: tableRow.insertCell(2),
        amp: tableRow.insertCell(3),
        cd: tableRow.insertCell(4),
        de: tableRow.insertCell(5),

      };

      tableInfo.fp.innerHTML = familyPlants[fam - 1];
      tableInfo.np.innerHTML = num;
      tableInfo.aip.innerHTML = heightCac[num - 1];
      tableInfo.amp.innerHTML = maxHeightPlants[fam - 1];
      tableInfo.cd.innerHTML = growthPercentage[fam - 1];
      tableInfo.de.innerHTML = calculateDE(fam - 1, num);

    }
    mainFunction(fam + 1);

  } else if (fam == 2) {
    for (num = 1; num <= infoPlants[2]; num++) {
      const tableRow = mainFunctionTable.insertRow(-1);
      let tableInfo = {
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
      tableInfo.de.innerHTML = calculateDE(1, num);

    }
    mainFunction(3);

  } else if (fam == 3){
    for (num = 1; num <= infoPlants[3]; num++) {
      const tableRow = mainFunctionTable.insertRow(-1);
      let tableInfo = {
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
      tableInfo.de.innerHTML = calculateDE(2, num);

    }

  }

}

/*      Calculate the waiting days or D.E (días de espera)      */

function calculateDE(family, number) {
  let result;
  let daysCac = [], daysPip = [], daysLil = [];
  daysCac[number - 1] = 0;
  daysLil[number - 1] = 0;
  daysPip[number - 1] = 0;

  switch (family) {
    case 0:
      result = heightCac;
      while (result[number - 1] <= maxHeightPlants[family]) {
        result[number - 1] += result[number - 1] * growthPercentage[family];
        daysCac[number - 1]++;

      }
      return daysCac[number - 1];

    break;
    case 1:
      result = heightPip;
      while (result[number - 1] <= maxHeightPlants[family]) {
        result[number - 1] += result[number - 1] * growthPercentage[family];
        daysPip[number - 1]++;

      }
      return daysPip[number - 1];

    break;
    case 2:
      result = heightLil;
      while (result[number - 1] <= maxHeightPlants[family]) {
        result[number - 1] += result[number - 1] * growthPercentage[family];
        daysLil[number - 1]++;

      }
      return daysLil[number - 1];

    break;
    default:
      return "HOW";

    break;

  }

}
