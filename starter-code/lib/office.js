//_.(nombre de la funcion de lodash)

var _ = require('lodash');
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer",
                ];

function randomOpinion(){
  var randomNum = _.random( 0, opinions.length-1 );
  return opinions[randomNum];
}

randomOpinion();


var staffOpinions = [];


function addOpinion(){
  staffOpinions.push(randomOpinion());
}



for(var i = 0; i < 10; i++){
  addOpinion();
}

function employeeSatisfaction(){
  var officeOpinions = [];
  for (var i = 0; i < 5; i++) {
    officeOpinions.push(staffOpinions);
  }
  return officeOpinions;
}

console.log(employeeSatisfaction());
