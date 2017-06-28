// --------- ITERATION 1: EMPLOYEE SATISFACTION ---------- //

// 1) Declare array of possible satisfaction opinions
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

// 2) Function that randomly selects an item in an array
function randomSelector(array) {
  return array[_.random(0,array.length-1)];
}

// 4) Function that adds a department (opinions) to employee survey
function addDepartment(array) {
  return array.push(_.times(10, randomSelector.bind(null, opinions)));
}

// General employee satisfaction method
var employeeSatisfaction = function () {
  var array = [];
  _.times(5,addDepartment.bind(null, array));
  return array;
};

//Display survey;
console.log(employeeSatisfaction());


// --------- ITERATION 2: HARRY POTTER ---------- //

// 1) Bundle names and birthdays
birthdays = _.chunk(birthdays,2);


// 2-3) Mission birthdays to be added + function
var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

var addBirthdays = function(bdays) {
  return _.concat(birthdays, _.chunk(bdays,2));
}

birthdays = addBirthdays(moreBirthdays);
//console.log(birthdays);


// --------- ITERATION 2: THE PASSWORD PROBLEM ---------- //

// Function to make sure no repeat characters
var noRepeatChar = function(password) {
  return _.isEqual(_.uniq(password), password.split("")); // Compares uniquified password to itself
}

// Function to make sure only numbers
var onlyNumbers = function(password) {
  var pwd = _.map(password.split(""), _.toNumber); // Convert password string to array of numbers, where not a number => NaN
  return _.indexOf(pwd, NaN) === -1 ? true:false; // Returns true if no NaN found
}

// Function to make sure no more than 10 characters
var trimPassword = function(password) {
  return password.length > 10 ? password.slice(0,10):password; //Returns slice from
}


// --------- ITERATION 3: ABBEY ROAD RECORDS ---------- //

// November looks like a good month
var novemberArtist = function () {
  var novArt =  _.filter(abbeyRoadRecords, {'month': 11}); //select only songs known to have been released in November
  var count = _.countBy(novArt, function(a) {return a.artist;}); //returns object {artist name: number of records}
  var arr = _.keys(count); //returns array with artist names, uniquified
  return _.maxBy(arr, function(a) {return count[a];}); //finds artits with max number of records
};

// Artists like to repeat
var bestArtist = function() {
  var count = _.countBy(_.filter(abbeyRoadRecords, 'artist'), function(a) {return a.artist;}); //returns object {artist name: number of records} -- only records with a specified artist
  var arr = _.keys(count); //returns array with artist names, uniquified
  return _.maxBy(arr, function(a) {return count[a];}); //finds artits with max number of records
};

// The Beatles and Abbey Road
var lastBeatlesSong = function () {
  var onlyBeatles = _.filter(abbeyRoadRecords, {'artist': 'The Beatles'});
  return _.maxBy(onlyBeatles, function(a) {return a.year}).song;
};

// The last sixties song
var sixtiesSong = function () {
  var onlySixtyNine = _.filter(_.filter(abbeyRoadRecords, 'year'), function(a) {return a.year === 1969});
  return _.maxBy(onlySixtyNine, function(a) {return a.month}).song;
};
