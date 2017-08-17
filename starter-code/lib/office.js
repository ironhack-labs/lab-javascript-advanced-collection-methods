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

console.log(chooseRandomOpinion(opinions));
console.log(employeeSatisfaction(opinions));
