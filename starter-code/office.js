//Pair Programming
// Jonathyn Tellez
// Arnau Guadall


var opinions = ["This is the best job ever",
    "Satisfied",
    "At least I get paid",
    "I'm looking for another job",
    "I don't want to answer"];

function getRandomItem(array) {

   var randIndex = Math.floor(Math.random() * array.length);

   return array[randIndex];
}

function getOfficeOpinions(opinions) {

   var officeOpinions = _.times(5, function () {

       var departmentOpinions = _.times(10, function () {

           return getRandomItem(opinions);
        });

       return departmentOpinions;
    });

   return officeOpinions;
}

console.log('office opinions', getOfficeOpinions(opinions));

// Exercise 2

var birthdays = ["Severus Snape", "9 January", "Arthur Weasley", "6 February",
                  "Ron Weasley", "1 March", "Remus Lupin", "10 March",
                  "Fred & George Weasley", "1 April", "Pomona Sprout", "15 May",
                   "Draco Malfoy", "5 June", "Dobby", "28 June",
                   "Neville Longbottom", "30 July", "Harry Potter", "31 July",
                   "Ginevra Weasley", "11 August", "Percy Weasley ", "22 August",
                   "Hermione Granger", "19 September", "Minerva McGonagall",
                   "4 October", "Filius Flitwick", "17 October", "Molly Weasley",
                   "30 October", "Bill Weasley", "29 November", "Rubeus Hagrid",
                   "6 December", "Charlie Weasley", "12 December"];

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];


var arrayIntoTuples = function(acc, item, index, array){

  if (index % 2 === 0) {
    acc.push([array[index], array[index + 1]]);
  }
  return acc;

};

var tuples = birthdays.reduce(arrayIntoTuples,[]);

var fullTuples = moreBirthdays.reduce(arrayIntoTuples,tuples);


// Exercise 3
// Part 1

var goodPsswd = "1234567890";
var badPsswd = "11";


var noRepeatChar = function (password) {

  var passwordAsList = password.split('');

  var hasNoRepeat = true;

  passwordAsList.sort();

  passwordAsList.forEach(function(item, index, array){

    if (index < array.length -1){
        if (item === array[index+1]){
          hasNoRepeat = false;
        }
    }
  });

  console.log('no repeat', hasNoRepeat);

  return hasNoRepeat;
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

// Part 2

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";


var onlyNumbers = function (pass) {

  var passToCheck = pass.split('');

   var isNumberOnly = true;
   console.log(passToCheck);
   passToCheck.forEach(function(item, index, array){

      if (!Number.isInteger(parseInt(item))){
       isNumberOnly = false;
      }
    });

    return isNumberOnly;

};

onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

// Part 3

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

var trimPassword = function (password) {
    return password.substring(0,10);
};

trimPassword(badPsswd);

// Exercise 4
// Part 1

var result = function (){
  return _.map(_.filter(abbeyRoadRecords, ["month", 11]) , "artist");
};

console.log(result());

// Part 2

function toCountHash(array) {

  var hash = _.reduce(abbeyRoadRecords, function(acc, item) {

    if (_.has(acc, item.artist)) {
      acc[item.artist] += 1;
    } else {
      _.set(acc, item.artist, 1);
    }

    return acc;
  }, {});

  return hash;

}

function findLastSong(songs) {
  return _.maxBy(songs, songDateComparator);
}

function songDateComparator(song) {
  // construct a 'year and month' number for use as comparator, could use Date but this is faster
  // note: we don't have day info so if multiple songs found with same year/month then unknown behaviour.
  // The list of records SEEMS to be sorted chonologically, but we don't know that for sure so let's be safe and use year/month

  // multiply year by 100 to give room for potentially 2 digit month
  return song.year * 100 + song.month;
}

var recordingCountHash = toCountHash(abbeyRoadRecords);

var mostRecorded = _.maxBy(Object.keys(recordingCountHash), function(artist){
  return recordingCountHash[artist];
});

console.log('most recorded artist:', mostRecorded);

var beatlesSongs = _.filter(abbeyRoadRecords, {artist:"The Beatles"});

var lastBeatlesSong = findLastSong(beatlesSongs);

console.log('last Beatles song:', lastBeatlesSong);


var songsFromSixties = _.filter(abbeyRoadRecords, function(item){
  return item.year >= 1960 && item.year < 1970;
});

lastInSixties = findLastSong(songsFromSixties);

console.log('last sixties song:', lastInSixties);
