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

var departmentSurvey = [];

function pushOpinionsToArray(finalArray, opinionsArray, times) {
  for (var i = 0; i < times; i++) {
    finalArray.push(randomOpinion(opinionsArray));
  }
  return finalArray;
}

var totalSurvey = [];

for (var i = 0; i < 5; i++) {
  totalSurvey.push(pushOpinionsToArray(departmentSurvey, opinions, 2));
}
console.log(totalSurvey);
