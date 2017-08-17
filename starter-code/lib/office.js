var _ = require('lodash');
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var survey = []

function randomChoice() {
  console.log("entro a randomChoice")
  return _.sample(opinions)
}

function departmentOpinion() {
  console.log("entro a addOpinions")
  return _.times(10,randomChoice)
}

function fiveDepartmentsOpinions(){
  return _.times(5, departmentOpinion)
}

console.log(fiveDepartmentsOpinions());

addOpinions()
