//Iteration 1

var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];

function randomResponse(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function arrayResponses(array) {

  var tenResponses = [];

  for (var i = 0; i < 10; i++) {
    tenResponses.push(randomResponse(array));
  }

  return tenResponses;
}

function arrayDepartmentResponses(array) {

  var fiftyResponses = [];

  for (var j = 0; j < 5; j++) {

    fiftyResponses.push(arrayResponses(array));
  }

  return fiftyResponses;

}

function finalResponses(array) {
  for (var i = 0; i < arrayDepartmentResponses(array).length; i++) {
    for (var j = 0; j < arrayDepartmentResponses(array)[i].length; j++) {
      console.log('Department' + ' ' + [i + 1] + ':' + ' ' + arrayDepartmentResponses(array)[i][j]);
    }
  }
}

var employeeSatisfaction = function(array) {
  for (var i = 0; i < arrayDepartmentResponses(array).length; i++) {
    for (var j = 0; j < arrayDepartmentResponses(array)[i].length; j++) {
      console.log('Department' + ' ' + [i + 1] + ':' + ' ' + arrayDepartmentResponses(array)[i][j]);
    }
  }
};

employeeSatisfaction(responses);

//Iteration 2

function organizeBirthdays(array) {
  var birthdaysArray = [];

  array.reduce(function (previous, current, index) {
    if (index % 2 != 0) {
      birthdaysArray.push([previous, current]);
    }
    return current;
  }, '');
  return birthdaysArray;
}

var goodBirthdays = organizeBirthdays(birthdays);

console.log(goodBirthdays);

var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
                      "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];

var moreGoodBirthdays = organizeBirthdays(moreBirthdays);

console.log(moreGoodBirthdays);

var finalBirthdaysArray = [];

goodBirthdays.forEach(function(el) {
  finalBirthdaysArray.push(el);
});

moreGoodBirthdays.forEach(function(el) {
  finalBirthdaysArray.push(el);
});

console.log(finalBirthdaysArray);

//Iteration 3

    //No repeat

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  var repeatedChars = 0;

  password.split('').sort(function(a,b) {
    if (a - b === 0) {
      repeatedChars++;
    }
  });

  if (repeatedChars > 0) {
    console.log('Ouch, bad password.');
  } else {
    console.log('Good password.');
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

    //Only numbers

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
  if (isNaN(password) === true) {
    console.log('Ouch, bad password.');
  } else {
    console.log('Good password.');
  }
};

onlyNumbers(goodPsswd);
// "Good password."

onlyNumbers(badPsswd);
// "Ouch, bad password."

    //Only 10 digits

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

        //Method 1
var trimPassword = function (password) {

  password = password.length > 10 ? password = password.split('').splice(0, 10).join('') : password;
  console.log(password);
};
trimPassword(badPsswd);

        //Method 2

var trimPassword2 = function (password) {

  password = password.length > 10 ? password.substring(0, 10) : password;
  console.log(password);
};

trimPassword2(badPsswd);

//Iteration 4

      //Artists who recorded in November

var novemberArtists = function (array) {

   var artistsArray = array.filter(function (element) {
    return element.month === 11;
  }).map(function (element) {
    return element.artist;
  });

  return artistsArray;
};

console.log(novemberArtists(abbeyRoadRecords));

      //Artist who has recorded the Most

var bestArtist = function (array) {
  var moreTimesArtistRecorded = 0;
  var mostRecordedArtist = '';

  for (var i = 0; i < array.length; i++) {
    var mostRecorded = array.filter(function (element) {
      return element.artist === array[i].artist;
    });

    if (mostRecorded.length > moreTimesArtistRecorded) {
      moreTimesArtistRecorded = mostRecorded.length;
      mostRecordedArtist = array[i].artist;
    }
  }
  return mostRecordedArtist;
};

console.log(bestArtist(abbeyRoadRecords));

      //Last Beatle song

var lastBeatlesSong = function (array) {
  var song = array.filter(function (element) {
    return element.artist === 'The Beatles';
  }).sort(function (a, b) {
    return b.year - a.year;
  });

  return song[0];
};

console.log(lastBeatlesSong(abbeyRoadRecords));

      //Last 60's song

var sixtiesSong = function (array) {
  var song = array.filter(function (element) {
    return element.year >= 1960 && element.year < 1970;
  }).sort(function (a, b) {
    return b.year - a.year;
  });

  return song[0];
};

console.log(sixtiesSong(abbeyRoadRecords));
