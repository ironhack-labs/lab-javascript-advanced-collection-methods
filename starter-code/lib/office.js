var _ = require('lodash');

//OFFICE
//1
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

//2
function chooseRandomOpinion (){
  return _.sample(opinions);
}

//3
var tenOpinions = function(a) {
  var array = [];
  _.times(10, function() {
    array.push(chooseRandomOpinion(a));
  });
  return array;
 };

//4
var employeeSatisfaction = function (a) {
  // Steps 2, 3 and 4 here
  var array = [];
  _.times(5, function() {
    array.push(tenOpinions(a));
  });
  return array;
};

var satisfaction = employeeSatisfaction(opinions);
//console.log(chooseRandomOpinion(opinions));
console.log("\nOpinions of the department 1:\n", satisfaction[0]);
console.log("\nOpinions of the department 2:\n", satisfaction[1]);
console.log("\nOpinions of the department 3:\n", satisfaction[2]);
console.log("\nOpinions of the department 4:\n", satisfaction[3]);
console.log("\nOpinions of the department 5:\n", satisfaction[4]);
