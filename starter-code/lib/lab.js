
//Employee survey
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


function selectRandom() {
  return _.sample(opinions);
}


var departmentResults = [];
var surveyResults = [];

function populateDepartmentResults() {
  return  _.times(10, selectRandom);
}

function populateSurveyResults() {
  return  _.times(5, populateDepartmentResults);
}

//departmentResults = populateDepartmentResults(opinions);
surveyResults = populateSurveyResults();
//console.log(surveyResults);

//Harry Potter
function createTwoDimArray(inputArray) {
  var birthdayObject = {};
  for (var i = 0; i < inputArray.length; i += 2) {
    birthdayObject[inputArray[i]] = inputArray[i+1];
  }
  return _.toPairs(birthdayObject);
}

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

hpBirthdays = createTwoDimArray(birthdays);
newBirthdays = createTwoDimArray(moreBirthdays);

function combineBirthdayArrays() {
  return _.concat(hpBirthdays, newBirthdays);
}

console.log(combineBirthdayArrays());

//Password Problem
