var opinions = [
  "Best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];

var opinionsArr = [];
var randomOpinion;
var poll1 = [];
var poll2 = [];
var poll3 = [];
var poll4 = [];
var poll5 = [];
var survey = [poll1, poll2, poll3, poll4, poll5];

function getOpinion (opinion) {
  randomOpinion =  _.sample(opinion);
  return randomOpinion;
}

function insertOpinion (opinion) {
  opinionsArr = [];
  for (var i = 0; i < 10; i++) {
    getOpinion(opinions);
    opinionsArr.push(randomOpinion);
  }
  return opinionsArr;
}

function poll (opinion) {
  for (var i = 0; i < survey.length; i++) {
    insertOpinion (opinion);
    for (var j= 0; j < opinionsArr.length; j++) {
      survey[i].push(opinionsArr[j]);
    }
  }
  return survey;
}

poll(opinions);
console.log(survey);
