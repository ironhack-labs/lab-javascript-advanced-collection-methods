var opinions = [ "This is the best job ever",
                  "Satisfied",
                  "At least I get paid",
                  "I'm looking for another job",
                  "I don't want to answer"];

/*
 *  The Office
 */

function getOpinion() {
  return _.sample(opinions);
}

var getDepartmentOpinion = function (){
  return _.times(10, getOpinion);
};

var getCompanySatisfaction = function () {
  return _.times(5, getDepartmentOpinion);
};

companySatisfaction = getCompanySatisfaction();

/*
 *  Harry Potter's Birthdays
 */

var betterBirthdays = _.chunk(birthdays, 2);
var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];
var betterMoreBirthdays = _.chunk(moreBirthdays, 2);
var allGoodBirthdays = _.concat(betterBirthdays, betterMoreBirthdays);

/*
console.log(betterBirthdays);
console.log(allGoodBirthdays);
*/

/*
 *  The Password Problem
 */

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  var passwordArray = password.split("");
  return (_.uniq(passwordArray).length === passwordArray.length);
};

/*
console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));
*/

goodPsswd = "1234567890";
badPsswd = "1a234567890";
var onlyNumbers = function (password) {
  return (!password.match(/[^0-9]/));
};

/*
console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));
*/

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
// passwd must be at least 10 char long.
var trimPassword = function (password) {
  return password.slice(0, 10);
};

//console.log(trimPassword(badPsswd));

/*
 *  Abbey Road
 */

var novemberArtists = function () {
  // counts number of songs for each artist in november of 1930s.
  var counts =  _.countBy(abbeyRoadRecords, function (value){
    if(_.startsWith(value.year, "193") && value.month === 11){
      return value.artist;
    }
  });
  // if song was not in november of 1930s, callback returns undefined,
  // we must delete this value.
  _.unset(counts, 'undefined');

  // loop through counts and return artist with most songs.
  return _.reduce(counts, function(bestArtistSoFar, value, key, collection){
    return value > collection[bestArtistSoFar] ? key : bestArtistSoFar;
  }, Object.keys(counts)[0]);
};

//console.log(novemberArtists() + " recorded the most songs in November.");

var bestArtist = function (){
  var counts = _.countBy(abbeyRoadRecords, function(value){
    return value.artist;
  });

  return _.reduce(counts, function(bestArtistSoFar, value, key, collection){
    return value > collection[bestArtistSoFar] ? key : bestArtistSoFar;
  }, Object.keys(counts)[0]);
};

//console.log(bestArtist() + " recorded the most times at Abbey Road Studios");

var lastBeatlesSong = function (){
  var allBeatlesSongs = _.filter(abbeyRoadRecords, function(value, idx){
    return (abbeyRoadRecords[idx].artist === "The Beatles") ? true : false;
  });

  return _.reduce(allBeatlesSongs, function(lastSongSoFar, value, idx){
    return value.year > lastSongSoFar.year ? value : lastSongSoFar;
  });
};

/*
var lastSong = lastBeatlesSong();
console.log("The Beatles recorded their last song at Abbey Studios in " +
  lastSong.year + " and it was called " + lastSong.song);
*/

var sixtiesSong = function (){
  var sixtiesSongs = _.filter(abbeyRoadRecords, function(value, idx){
    return _.startsWith(value.year, "196") ? true : false;
  });

  return _.last(sixtiesSongs).song;
};

/*
console.log(sixtiesSong() + " was the last song recorded at Abbey Studios" +
  " in the sixties.");
*/
