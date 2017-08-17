
//Iteracion 1.1
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


//Iteracion 1.2
function elegirOpinion(){
    return _.sample(opinions);
}

//Iteracion 1.3

function addOpinion(){
  return _.times(10,elegirOpinion);
}

var departamento = addOpinion();

//Iteración 1.4


function employeeSatisfaction(){
  return _.times(5,addOpinion);
}

var survey = employeeSatisfaction();
console.log(survey);
