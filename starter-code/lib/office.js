var _ = require ('lodash');

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var department = [];

function chooseOpinion() {
  return department.push(_.sample(opinions));
}
chooseOpinion();

function repeatTen() {
  return _.times(10, chooseOpinion);
}
repeatTen();

var officeSatisfaction = [];

function pushDepartment() {
 return officeSatisfaction.push(department);
}
pushDepartment();

function repeatFive() {
 return _.times(5, pushDepartment);
}
repeatFive();

console.log (officeSatisfaction);
