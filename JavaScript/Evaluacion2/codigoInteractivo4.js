//Made By Bl4ky113

//Variables

var sex, age, timMthn;

var minTimMthn = [
  150,  // Men, <40: <[1]
  175,  //Men, =>40: <[2]
  180,  //Women, any: <[3]
];

sex = prompt("Dígite su Sexo");
age = parseInt(prompt("Dígite su Edad"));
timMthn = parseInt(prompt("Dígite el tiempo en que termino su ultima maraton"));

//Functions

if (sex.toLowerCase() == "hombre" || sex.toLowerCase() == "masculino") { //function Men
  switch (true) {
    case (age < 40 && timMthn < minTimMthn[0] || age >= 40 && timMthn < minTimMthn[1]):
      document.write("Bienvenido a el Equipo de Atletas para la Maratón Internacional!");

    break;
    default:
      document.write("Lo sentimos, pero usted no esta clasificado para entrar a el Equipo de Atletas.\nVuelva a interntar la proxima maratón");

    break;

  }

} else if (sex.toLowerCase() == "mujer" || sex.toLowerCase() == "femenino") { //function woman; !!DOESNT USE AGE
  switch (true) {
    case (timMthn < minTimMthn[2]):
      document.write("Bienvenido a el Equipo de Atletas para la Maratón Internacional!");

    break;
    default:
      document.write("Lo sentimos, pero usted no esta clasificado para entrar a el Equipo de Atletas.\nVuelva a interntar la proxima maratón");

    break;

  }

} else{ //if sex is undefined
  document.write("Lo lamentamos, pero su sexo no esta definido en el programa");

}
