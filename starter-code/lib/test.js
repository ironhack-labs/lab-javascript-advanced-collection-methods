// 1) Create an array that matches these opinions.
 var opinions = [ "This is the best job ever",
                  "Satisfied",
                  "At least I get paid",
                  "I'm looking for another job",
                  "I don't want to answer"];

// 2) Create a function that randomly picks up one of these items in the `opinions` array.

function randomOpinion() {
  return opinions[Math.round(Math.random() * (opinions.length -1))];
}

// 3) Create a function that pushes the item into the array. You will need to repeat this procedure ten times to create an array of 10 opinions.

function questioning() {
  return _.times(10, randomOpinion);
}

// 4) Create another function that pushes the 10-items-array into another array. You will need to do this five times to create the five departments. At the end you will have something like the function below:

var departments = _.times(5, questioning);

// 5) Show your result in the console.

console.log(departments);

// 1) Create a function that receives an array and returns an array of two dimensions. Each internal array should have the name of one character and his date of birthday.

var arr = [1,2,3,4,5,6,7,8,9,10]

var newArr = [];
while(arr.length) newArr.push(arr.splice(0,2));

console.log(newArr);

// 1) Create a function that receives an array and returns an array of two dimensions. Each internal array should have the name of one character and his date of birthday.
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

var mix = _.chunk(birthdays, 2);
console.log(mix);

// 2) Now that we have our two-dimensions array, we notice that some of the birthdays are missing. But we found another array with birthdays from the book.

// 3) Create a function that add this array above to the first one you manipulated with the same format. The function should return an array with all the birthdays in pairs.


var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

console.log(_.chunk(moreBirthdays, 2).concat(mix));

// ## The Password Problem

// Yeah, yeah, to set a password is ALWAYS a big trauma. We will ask for a password to our users and we need to implement validation methods for this password.
// **Different characters:**


// // This part is not functional, just ideas of approach
// var goodPsswd = "1234567890";
// var badPsswd = "1123456";
// var noRepeatChar = function (password) {
//  console.log(_.uniq(_.parseInt(_.split(password))));
//  return ("this one works");
// }
//
// var good = noRepeatChar(goodPsswd);
// console.log(good);
// var bad = noRepeatChar(badPsswd);
// console.log(bad);
//
// // **Only numbers:**
// var goodPsswd = "1234567890";
// var badPsswd = "1a234567890";
// var onlyNumbers = function (password) {
//   return _.isNumber(_.parseInt(password));
// }
// var good = onlyNumbers(goodPsswd);
// console.log(good);
// var bad = onlyNumbers(badPsswd);
// console.log(bad);
//
// // **Ten digits only:**
// var goodPsswd = "1234567890";
// var badPsswd = "12345678901234567890";
// var trimPassword = function (password) {
//  return _.max(_.isLength(password));
// }
// var trim = trimPassword(badPsswd);
// console.log(trim);
//
// // **November looks like a good month:**
// var novemberArtists = function () {
//   var art = _.map(abbeyRoadRecords, 'month');
//   return art;
// };
//
// var art = [];
// var artist = novemberArtists(art);
// console.log(artist);
//
// // **Artists like to repeat:**
// var bestArtist = function () {
//   //your code
// };
//
// // **The Beatles and Abbey Road:**
// var lastBeatlesSong = function () {
//   //your code
// };
//
// // **Sixties crazyness:**
// var sixtiesSong = function () {
//   //your code
// };
