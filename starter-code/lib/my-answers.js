//Iteration 1 - The Office
//Defining a response array
let responses = [
  "This is the best job ever!",
  "Satisfied.",
  "At least I get paid.",
  "I'm looking for another job.",
  "I don't want to answer."
];

//Randomly getting one response from the array
function getRandom (number){
    let randomNumber = Math.floor(Math.random() * Math.floor(number));
    return responses[randomNumber];
}

//Adding 10 answers to the first department
function deptAnswers (dept){
  let dep = [];
  for (i=0; i<10; i++){
    dep.push(getRandom(responses.length));
  }
  return dep;
}

//Creating final array with 5 departments with 10 answers each one
function allDepts (){
  let satisfaction = [];
  for (j=0; j<5; j++){
   satisfaction.push(deptAnswers());
  }
  return satisfaction;
}
let costumerSatisfaction = allDepts();

//Logging the final result
console.log(costumerSatisfaction);

//Iteration 2 - Harry Potter's Birthdays
//Creating one array for each char and birthday
function goodArray(arr) {
  let betterArray = [];
  arr.forEach(elem => {
    if (arr.indexOf(elem) % 2 === 0) {
      let eachArr = [];
      eachArr.push(elem, arr[arr.indexOf(elem) + 1]);
      //console.log(eachArr);
      betterArray.push(eachArr);
    }
  });
  return betterArray;
}
//Calling the function to fix the birthdays array
let bDaysFixed = goodArray(birthdays);

//Now we have another array
var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
                      "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];
//Calling the same function to the new array                      
let moreBDaysFixed = goodArray(moreBirthdays);

//Mixing the arrays togheter
let finalBDays = bDaysFixed.concat(moreBDaysFixed);

//Showing the result
console.log(finalBDays);

//Iteration 3 - The Password Problem
//Unique characters
var goodPsswd = "1234567890";
var badPsswd = "1123456";

//Checking for duplicates
var noRepeatChar = function (password) {
  for (i=0; i<password.length; i++){
    let check = password.indexOf(i);
    if (password.indexOf(password[i], i+1) !== -1){
      return "Ouch, bad password.";
    }
  }
  return "Good password.";
};

//Calling the function for different arrays
let pass1 = noRepeatChar(goodPsswd);
// "Good password."
console.log(pass1);

let pass2 = noRepeatChar(badPsswd);
// "Ouch, bad password."
console.log(pass2);

//Only numbers
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

//Checking if is just numbers
var onlyNumbers = function (password) {
 if(isNaN(password)){
   return "Ouch bad password.";
 }
 return "Good password."
};
//Loggin in the system
let goodPwd = onlyNumbers(goodPsswd);
// "Good password."
console.log(goodPwd);

let badPwd = onlyNumbers(badPsswd);
// "Ouch, bad password."
console.log(badPwd);

//Ten digits only
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

//Checking results
var trimPassword = function (password) {
  if(password.length > 10){
    let newPass = password.slice(10);
    return newPass;
  }
  return password;
};
let trimmedPass = trimPassword(badPsswd);
// "1234567890"
console.log(trimmedPass);

//Iteration 4 - Abbey Road Studios
//November looks like a good month
var novemberArtists = abbeyRoadRecords.filter(function(elem){
  return elem.year === 2011;
});
// Don't forget to invoke the function to see the result
console.log(novemberArtists);

//Artists like to repeat
var bestArtist = function(array){
  let repeatArtists = [];
  array.forEach (function(elem){
    repeatArtists.push(elem.artist);
  });
  
  function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

  return mode(repeatArtists);
};
// Don't forget to invoke the function to see the result
console.log(bestArtist(abbeyRoadRecords));

//The Beatles and Abbey Road
var lastBeatlesSong = function (arr) {
  let lastBeatlesSong = {year: 0};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].artist === 'The Beatles' && arr[i].year > lastBeatlesSong.year) {
      lastBeatlesSong = arr[i];
    } 
  }

  return lastBeatlesSong;
};

// Don't forget to invoke the function to see the result
console.log(lastBeatlesSong(abbeyRoadRecords));

//Sixties crazyness
var sixtiesSong = function (array){
  let lastSixitie = {month: 0};
  for (i=0; i<array.length; i++){
    if (array[i].year === 1969 && array[i].month > lastSixitie.month){
      lastSixitie = array[i];
    }
  }
  return lastSixitie
};

// Don't forget to invoke the function to see the result
console.log(sixtiesSong(abbeyRoadRecords));