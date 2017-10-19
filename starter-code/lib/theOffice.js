var _ = require('lodash');

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function randomOpinion(opinions){
    return _.sample(opinions);
}
console.log(randomOpinion(opinions));
//
function departmentOpinions() {
  return  _.times(10, function (){
  return randomOpinion(opinions);
});
}

console.log(departmentOpinions());
//
var employeeSatisfaction = function () {
 var array = [];
 var departmentOpinion = _.times (5, function(){
   return departmentOpinions();
 });
 return departmentOpinion;

};
console.log(employeeSatisfaction());
