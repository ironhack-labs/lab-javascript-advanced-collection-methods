var _ = require('lodash');

//Iteracion 1.1
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


//Iteracion 1.2
function elegirOpinion(array){
    return _.sample(array);
}

elegirOpinion(opinions);

//Iteracion 1.3

var departamento1 = {
  opiniones:[]
}
var departamento2 = {
  opiniones:[]
}
var departamento3 = {
  opiniones:[]
}
var departamento4 = {
  opiniones:[]
}
var departamento5 = {
  opiniones:[]
}
var departamentos = [departamento1,departamento2,departamento3,departamento4,departamento5];


function addOpinion(array, departamento){
  departamento.opiniones = _.times(10,(elegirOpinion(array)));
}

addOpinion(opinions,departamento1)
console.log(departamento1)
elegirOpinion(opinions)
