var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function randomSelect(array) {
  return _.sample(array)
}


function construct(array) {
  // pushes a random item from 'array' 10 times, returns the constructued array
  var constructedArray = []
  for (var i = 0; i < 10; i++) {
    constructedArray.push(randomSelect(array))
  }
  return constructedArray
}


function constructDepartment(array) {
  var constructedDep = []
  for (var i = 0; i < 5; i++) {
    constructedDep.push(construct(array))
  }
  return constructedDep
}

console.log(constructDepartment(opinions))


// Iteration 2

function array2D (array) {
  return _.chunk(array,2)
}

//console.log(array2D(birthdays))

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

function completeBday(array,moreBirthdays) {
  return _.concat(array2D(array), array2D(moreBirthdays))
}

console.log(completeBday(birthdays,moreBirthdays));;


// Iteration 3
var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  for (i = 0; i < password.length; i++) {
    var firstIndex = _.findIndex(password.split(''), function (o) { return o === password[i]})
    var lastIndex = _.findLastIndex(password.split(''), function (o) { return o === password[i]})

    if (firstIndex === lastIndex) {
      return "sucess"
    } else {
      return "dont repeat dummy"
    }
  }
}

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

var onlyNumbers = function (password) {
  return _.isInteger(Number(password))
}

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

console.log(onlyNumbers(goodPsswd))
console.log(onlyNumbers(badPsswd))


var goodPsswd = "12345678";
var badPsswd = "12345678901234567890";

var trimPassword = function (password) {
 var trimmedArray = _.slice(password.split(''), 0, 10)
 return _.join(trimmedArray, '')
}

console.log(trimPassword(goodPsswd))
console.log(trimPassword(badPsswd))


//Iteration 4
var novemberArtists = function (records) {
  var novemberRecords = _.filter(records, { 'month': 11})
  var countedRecords = _.countBy(novemberRecords, (record) => { return record.artist })
  var max_artist = novemberRecords[0].artist // initializing max_artist

  _.keys(countedRecords).forEach( (artist) => {
    if (countedRecords[artist] > countedRecords[max_artist]) {
      max_artist = artist
    }
  })

  console.log(max_artist + " recorded the most records on a november (" + countedRecords[max_artist] + " records)")
  return max_artist
};

novemberArtists(abbeyRoadRecords)


// Basically the same as the previous function, just without the filtering by month
var bestArtist = function (records) {
  var countedRecords = _.countBy(records, (record) => { return record.artist })
  var max_artist = records[0].artist // initializing max_artist

  _.keys(countedRecords).forEach( (artist) => {
    if (countedRecords[artist] > countedRecords[max_artist]) {
      max_artist = artist
    }
  })

  console.log(max_artist + " recorded the most records in Abbey (" + countedRecords[max_artist] + " records)")
  return max_artist
};

bestArtist(abbeyRoadRecords)



var lastBeatlesSong = function (records) {
  var beatlesRecord = _.filter(records, { 'artist': 'The Beatles'})
  var final_recording_year = 1900

  beatlesRecord.forEach( (record) => {
    if (record.year > final_recording_year) {
      final_recording_year = record.year
    }
  })
  console.log("The Beatles recorded their final song in Abbey Road " + final_recording_year)
  return final_recording_year
};

lastBeatlesSong(abbeyRoadRecords)
