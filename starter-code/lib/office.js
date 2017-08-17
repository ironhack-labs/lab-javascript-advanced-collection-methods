var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var survey = []

function randomChoice(choices) {
  return _.sample(choices)
}

function addOpinions(randomChoicer, availableOptions, elections) {
  for(var i=0; i<10; i++){
    var a = randomChoicer(availableOptions);
    elections.push(a);
  }
  console.log(elections);
}

addOpinions(randomChoice, opinions, survey)
