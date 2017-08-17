
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
}

var employeeSatisfaction = function () {
  var final = [];
  for(var i = 0; i<5; i++){
    for(var j =0; j<10; j++){
      pushInside();
    }

  }
  final = _.chunk(survey,10);
  return final;
};

//console.log(employeeSatisfaction());
