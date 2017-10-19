var _ = require('lodash'); /*we name loadash "_"*/

var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];


var takeOpinion = function() {
  return _.sample(opinions);
};

var arrayOfOpinions = function() {
  return _.times(10, takeOpinion);
};

var employeeSatisfaction = function() {
  return _.times(5, arrayOfOpinions);
};

console.log(employeeSatisfaction());
