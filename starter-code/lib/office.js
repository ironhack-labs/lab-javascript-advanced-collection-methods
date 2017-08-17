var _ = require('lodash');
//OFFICE

//1
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

//2
function chooseRandomOpinion(a){
  return _.sample(a);
}

//3
function tenOpinions(a){
  var randOpinions=[];
   randOpinions = _.times(10, chooseRandomOpinion(a));
   return randOpinions;

}
//4

var employeeSatisfaction = function () {
  // Steps 2, 3 and 4 here
  var array=[];
  for(var i = 0; i<5; i++){
    array[i] = tenOpinions();
  }
  return array;
};

console.log(chooseRandomOpinion(opinions));
console.log(tenOpinions(opinions));
