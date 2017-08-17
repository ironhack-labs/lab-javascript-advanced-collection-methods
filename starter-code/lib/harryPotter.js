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

var newArray = _.chunk(birthdays, 2);

console.log(newArray);

//Iteration 1

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

var newArray2 = _.chunk(moreBirthdays, 2);

//Iteration 2

function masterMerge(){
  return _.concat(newArray, newArray2);
}

var allTheBirthdays = masterMerge();

console.log(allTheBirthdays);

//Iteration 3.1
// var password = "";
// function checkUniqueness(password){
//   return _.uniq(password).length !== password.length;
// }
//
// checkUniqueness(goodPsswd);
// console.log(checkUniqueness(goodPsswd));

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
 return _.uniq(password).length !== password.length;
};

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

//Iteration 3.2

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function (password) {
 return _.filter(password, predicate);
 
};

console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));

// _.filter(collection, [predicate=_.identity])
// _.includes(collection, value, [fromIndex=0])
