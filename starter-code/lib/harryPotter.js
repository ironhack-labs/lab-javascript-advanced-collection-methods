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


function arrayCleaner(birthdaylist) {
var charName = birthdaylist.filter(function(name, index){
  return index % 2 === 0;
});

var charDate = birthdaylist.filter(function(date, index) {
return index % 2 !== 0;
});

var cleanArray = charName.map(function(name, index){
  return [name, charDate[index]];
});
return cleanArray;
}

var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
                      "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];


var cleanArray1 = arrayCleaner(birthdays);
var cleanArray2 = arrayCleaner(moreBirthdays);

var mergedArray = cleanArray1.concat(cleanArray2);

console.log(mergedArray);
