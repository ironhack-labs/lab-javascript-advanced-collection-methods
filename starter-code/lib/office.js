var _ = require('lodash');
//1. iteration 1
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
var aleatory = [];
var matrix = [];
//1. iteration 2
// Hacemos un shuffle del array que nos pasen (listOpinions)
function randomOpinion(listOpinions){
  return _.shuffle(listOpinions)[0]; // Create 1 opinion

}

//1. iteration 3
// Insertamos el array creado con randomOpinion en aleatoryInFunction
function insertIntoArray (aleatoryInFunction){
  aleatoryInFunction.push(randomOpinion(opinions)); // Insert 1 opinion
}
// Llamamos 10 veces a insertIntoArray (resultado: 10 inserts)
function insertTenOpinions (){
  for (var i=0; i < 10; i++){
    insertIntoArray(aleatory); //Insert 10 opinions
  }
  return aleatory;
}


//1. iteration 4

function create5x10 (){
  // Creamos 5 grupos de 10
  for (var z=0; z < 5; z++){
    // Cada vez que hemos metido los resultados limpiamos aleatory
    // Para meter otros 10 resultados nuevos
    aleatory = [];
    matrix.push(insertTenOpinions());
  }
}
// Llamamos a nuestra funcion
var employeeSatisfaction = function () {
  // We use 1 function to call the others.
  return create5x10();
};
employeeSatisfaction();
console.log(matrix);

//console.log(matrix)
