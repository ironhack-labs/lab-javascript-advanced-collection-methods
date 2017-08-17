var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


var fiftyRandomOpinions = [];

var employeeSatisfaction = function () {
  var randomOpinions = [];
  randomOpinions.push(_.times(10,function(){return _.sample(opinions)}));
  return randomOpinions;
};

var fifty = function(){ return _.times(5,employeeSatisfaction)};

console.log(fifty());



