var opinions = ["This is the best job ever",
    "Satisfied",
    "At least I get paid",
    "I'm looking for another job",
    "I don't want to answer"
];
// Create a function that randomly picks up one of these items in the opinions array.
function randomly () {
  //Elige un elemento al azar del array opinions
  return _.sample(opinions); //Aplicando lodash
  //otra forma de hacerlo y que  funciona sin lodash
    // var oneOpinion = Math.random();
    // oneOpinion = oneOpinion * opinions.length;
    // oneOpinion = Math.floor(oneOpinion);
    // return opinions[oneOpinion];
}
var oneOpinion = randomly();
console.log(oneOpinion);

// Create a function that pushes the item into the array. You will need to repeat this procedure ten times to create an array of 10 opinions.
function repit_01() {
    // _.times , el 10 es el numero de veces que ejecuta la funcion question
    //Traduccion: voy a repetir 10 veces el valor arrojado por randomly
    return _.times(10, randomly);
}
var groupOpinions = repit_01(opinions);
console.log(groupOpinions);


// Create another function that pushes the 10-items-array into another array. You will need to do this five times to create the five departments.
function repit_02() {
    return _.times(5, repit_01);
}
var empoyeeSatisfaction = repit_02(repit_01);
console.log(empoyeeSatisfaction);

// Create a function that receives an array and returns an array of two dimensions. Each internal array should have the name of one character and his date of birthday.
function groupHarry(parametro_01) {
  // _.chunk crea una array dentro de un array
  //En este caso cada sub array tendra  dos elementos tomados de forma consecutuva del array que pasemos como parametro.
    var dates_01 = _.chunk(parametro_01, 2);
    console.log(dates_01);
    return dates_01;
}

console.log(groupHarry(birthdays));

//Some of the birthdays are missing. But we found another array with birthdays from the book.
var moreBirthdays = [" Lily Evans ", " 30 de de enero de ", " James Potter ", " 27 de de marzo de ", " Dudley Dursley ", " 30 de de junio de ", " Tom Riddle ", " 31 de de diciembre de "];

//hacemos lo mismo al array moreBirthdays que hemos hecho con el array birthdays
function groupHarryAdd(parametro_01) {
    var dates_02 = _.chunk(parametro_01, 2);
    return dates_02;
}
console.log(groupHarryAdd(moreBirthdays));

//Create a function that add this array above to the first one you manipulated with the same format. The function should return an array with all the birthdays in pairs.
function groupHarryAdd2(parametro_01, parametro_02) {
    //Concatenenamos los arrays birthdays y moreBirthdays una vez trasnformados en arrays bidimensionales (arrays de arrays)
    var dates_03 = _.concat(groupHarry(birthdays), groupHarryAdd(moreBirthdays));
    return dates_03;
}
console.log(groupHarryAdd2(birthdays,moreBirthdays));

//////
