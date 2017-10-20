var listOfNames = [];
var listOfBirthdays = [];
var listComplete = [];
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
// 2. Iteration 1 make 2xX array with 0,1 value

function oneToTwoDimensionsArray(listOfArrays){
  for(var i=0; i<listOfArrays.length;i++){
    if (i % 2 === 0){
      listOfNames.push(listOfArrays[i]);
    }else{
      listOfBirthdays.push(listOfArrays[i]);
    }
  }
  //console.log(listOfBirthdays);
 listComplete = [];
  for (i = 0; i < listOfNames.length; i++){
    listComplete.push([listOfNames[i],listOfBirthdays[i]]);
  }
  return listComplete;
}

// Iteration 2
var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];
oneToTwoDimensionsArray(birthdays);
listComplete.push(oneToTwoDimensionsArray(moreBirthdays))
console.log(listComplete);
