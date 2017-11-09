

 var birthdays = ["Severus Snape", "9 January","Arthur Weasley", "6 February",
                  "Ron Weasley", "1 March", "Remus Lupin", "10 March",
                  "Fred & George Weasley", "1 April", "Pomona Sprout", "15 May",
                   "Draco Malfoy", "5 June", "Dobby", "28 June",
                   "Neville Longbottom", "30 July", "Harry Potter", "31 July",
                   "Ginevra Weasley", "11 August", "Percy Weasley ", "22 August",
                   "Hermione Granger", "19 September", "Minerva McGonagall",
                   "4 October", "Filius Flitwick", "17 October", "Molly Weasley",
                   "30 October", "Bill Weasley", "29 November", "Rubeus Hagrid",
                   "6 December", "Charlie Weasley", "12 December"];

// no funciona
/*function organizeBirthdays(array){
    var correctArray = [];
    var j = 0;
    for(i=0 ; i < array.length ; i++){
      if (correctArray[j] = undefined){
        correctArray[j] = [];
      }
      if(i % 2 === 0){
        console.log(i + " es un numero par");
        correctArray[j].push(array[i]);
      }else if(i % 2 != 0){
        console.log(i + " es un numero impar");
        correctArray[j].push(array[i]);
        j++;
      }
    }
    return correctArray;
}*/

function organizeBirthdays(array){
  var correctArray = [];
  var tempArray = [];
  for(i=0 ; i < array.length ; i++){
    if (i % 2 !== 0) {
      tempArray.push(array[i-1], array[i]);
      correctArray.push(tempArray);
      tempArray = [];
    }
  }
  return correctArray;
}
var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
                      "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];

function addBirthdays(birthdays,newBirthdays) {
  for(i=0; i<newBirthdays.length; i++){
    birthdays.push(newBirthdays[i]);
  }
  return birthdays;
}
newBirthdaysList = addBirthdays(birthdays,moreBirthdays);
//console.log(newBirthdaysList);
orgBirthdays = organizeBirthdays(newBirthdaysList);

//-----------  ITERATION 3 -> passwords  -------

var goodPsswd = "1324598670";
var badPsswd = "12456172";

var noRepeatChar = function (password){
  var ind = true;
  for(var i=0; i<password.length; i++){
    for(var j=0; j<password.length; j++){
      if(i != j){
        if(password[i] === password[j]){
          ind = false;
        }
      }
    }
  }
  if(ind){
    console.log("Good Password! No numbers repited");
  }else{
    console.log("Wrong Password my friend. Numbers repited");
  }
};

var onlyNumbers = function(password){
  var ind = true;
  for(var i=0; i<password.length; i++){
    if(isNaN(password[i])){
      ind = false;
    }
  }
  if(ind){
    console.log("Good Password! Only numbers");
  }else{
    console.log("Wrong Password my friend. Only numbers please!");
  }
};

console.log("--- comprobador de num repetidos -----");
noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

console.log("--- comprobador de letras -----");
onlyNumbers("789899809");
onlyNumbers("7898998d09");
