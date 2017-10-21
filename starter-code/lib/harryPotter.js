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


var orderedArray = [];

function bdays () {

 var bdayArray =[];
 while (birthdays.length >0) {
  orderedArray.push(birthdays.splice(0 , 2));
 }
 return bdayArray;
}

bdays();


var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                    "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

function arrayPushMoreBday() {
 var bdayArray2 =[];
 while ( moreBirthdays.length >0 ) {
  orderedArray.push( moreBirthdays.splice(0 , 2) );
 }
 return bdayArray2;
}

console.log( orderedArray );
arrayPushMoreBday();
