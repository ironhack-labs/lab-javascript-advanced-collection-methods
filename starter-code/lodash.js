var _ = require("lodash");



var employeeSatisfaction = function () {
  function randomOpinions() {
    return _.sample(opinions);
  }

  function deptOpinions(){
   return _.times(10, randomOpinions);
 }
  var array = _.times(5, deptOpinions);

  return array;
};

console.log(employeeSatisfaction());
