var _ = require('lodash');


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

function agroup(array){
  var groupedArray=_.chunk(array, 2);
  return groupedArray;
}
console.log("The characters divided " + agroup(birthdays));

console.log("");

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

function moreDates(array1, array2){
  var firstArray = agroup(array1);
  var secondArray = agroup(array2);
  var completeArray=_.concat(firstArray, secondArray);
  return completeArray;
}
console.log("3 more birthdays "+ moreDates(birthdays, moreDates));
