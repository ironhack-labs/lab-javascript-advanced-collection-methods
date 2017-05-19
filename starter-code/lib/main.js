//The Office
// Array of opinions
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var employeeSatisfaction = function () {
  var array = [];
  var fillDepto = function () { array.push(_.times(10, function () {return _.sample(opinions);}));};
  _.times(5, function() {return fillDepto();});
  return array;
};
console.log(employeeSatisfaction());


// Harry Potter - Chunking the array
var pairsOfBirthdays = _.chunk(birthdays, 2);
// Adding extra birthdays to the array
var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];
var allBirthdays = function () { return _.concat(pairsOfBirthdays, _.chunk(moreBirthdays, 2));};
console.log(allBirthdays());


// The Password Problem
var goodPsswd = "1234567890";
var badPsswd = "1123456";
//Unique Characters
function noRepeatChar(password) {

  var result = _.filter(password, function (value, index, iteratee) {
    return _.includes(iteratee, value, index + 1);
    });

    if (result.length < 1) {
      console.log("good password");
    } else {
      console.log("AUCH, bad password");
    }
}

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
// Only digits
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  return _.dropRight(password.split(""), 10).join("");
};
trimPassword(badPsswd);


// Abbey Road Studios
// November is a good month
var novemberArtists = function () {
  return _.uniq(_.map(_.filter(abbeyRoadRecords, ["month", 11]), "artist"));
};
console.log(novemberArtists());
// Artist who recorded the most times
var bestArtist = function () {
  return _.first(_.orderBy(_.groupBy(abbeyRoadRecords, "artist"), ['Array', 'length'], ['asc', 'desc']))[0].artist;
};
console.log(bestArtist());
// The Beatles and Abbey Road
var lastBeatlesSong = function () {
  return _.orderBy(_.filter(abbeyRoadRecords, ["artist", "The Beatles"]), 'year', ['desc'])[0].year;
};
console.log(lastBeatlesSong());
// Sixties Crazyness
var sixtiesSong = function () {
  return _.orderBy(_.filter(abbeyRoadRecords, ["year", 1969]), 'month', ['desc'])[0];
};
console.log(sixtiesSong().artist + " recorded " + sixtiesSong().song);
