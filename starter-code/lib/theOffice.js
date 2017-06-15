var _ = require('lodash');

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
                 
var employeeSatisfaction = function(){
  function random(){
    return _.sample(opinions);
  }
  function opinionsSample(){
    return _.times(10, random);
  }
  var dptSatisfaction = _.times(5, opinionsSample);
  return dptSatisfaction;
};

console.log(employeeSatisfaction());
