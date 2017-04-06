var opinions = [
  "This is the best jobever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer",
];

function randomOpinion(array) {
  return _.sample(array);
}

var survey = [];

survey.push(randomOpinion(opinions));
