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

var birthdaysCharacters = [];

function generate2Darray(array){
  birthdaysCharacters =_.chunk(array, 2);
  return birthdaysCharacters;
}

console.log(generate2Darray(birthdays));

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

function concat2Arrays(array1,array2){
var array12D = generate2Darray(array1);
var array22D = generate2Darray(array2);
var newArray = _.concat(array12D, array22D);
return newArray;
}
var newAgenda = concat2Arrays(birthdays, moreBirthdays);

console.log(newAgenda);
