//var _ = require('lodash');
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function samples () {
  return _.sample(opinions);
}

function collection (){
  return _.times(9, samples);
}

function employeeSatisfaction (){
  return _.times(5, collection);
}

console.log(employeeSatisfaction());
