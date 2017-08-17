
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
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  var checkedValues = [];
  for (var i = 0; i < password.length; i++) {
    if (checkedValues.indexOf(password[i]) !== -1) {
      return 'There are repeated characters';
    } else {
      checkedValues.push(password[i]);
    }
  }
  return 'Good to go! There are not repeated characters';
};

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

//Only numbers
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
  for (var i = 0; i < password.length; i++) {
    if (isNaN(parseInt(password[i]))) {
      return 'Beware! There is a character that is not allowed!';
    }
  }
  return 'Good to go! There are only numbers';
};
console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));

//Triming to 10 digits
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var tooShort = "1234";
var trimPassword = function (password) {
  return password.substring(0, 10);
};
console.log(trimPassword(goodPsswd));
console.log(trimPassword(badPsswd));
console.log(trimPassword(tooShort));

// Abbey Road records

var novemberArtists = function () {
  var novArtists = abbeyRoadRecords.filter(function(record) {
    return record.month === 11;
  });
  var groupedByArtist = novArtists.reduce(function (acc, recordInfo) {
    var keys = Object.keys(acc);
    acc[recordInfo.artist] = keys.indexOf(recordInfo.artist) === -1 ? 1 : acc[recordInfo.artist] += 1;
    return acc;
  }, {});
  return groupedByArtist;
};

console.log(novemberArtists());
//Remember to execute the function to actually assing the value to the var.

var timesRecorded = abbeyRoadRecords.reduce(function (acc, recordInfo) {
  var index = _.findIndex(acc, {'artist': recordInfo.artist});
  if (index === -1) {
    acc.push({
      artist: recordInfo.artist,
      times: 1
    });
  } else {
    acc[index].times = acc[index].times + 1;
  }
  return acc;
}, []);

var maxValue = _.maxBy(timesRecorded, 'times');
console.log(maxValue);


var beatles = abbeyRoadRecords.filter(function(record) {
  return record.artist === 'The Beatles';
});
var lastYear = _.maxBy(beatles, 'year');
console.log("The Beatles recorded their last song in " + lastYear.year);

var recordsInTheSixties = abbeyRoadRecords.filter(function(record) {
  return record.year >= 1960 && record.year <= 1969;
});
var lastRecordInAbbeyStudio = _.sortBy(recordsInTheSixties, ['year', 'month']);
console.log(lastRecordInAbbeyStudio[lastRecordInAbbeyStudio.length - 1]);
