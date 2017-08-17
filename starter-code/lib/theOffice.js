var _ = require('lodash');

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
var survey = [];

function pickRandom(){
  return _.sample(opinions);
}
function pushInside(){
  survey.push(pickRandom());
  return _.times(10,pickRandom);
}

var employeeSatisfaction = function () {

  var final = [];

  var hola = _.times(5,(pushInside));
  final = _.chunk(survey,10);
  return hola;
};

//console.log(employeeSatisfaction());
