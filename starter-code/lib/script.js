// iteration 1

var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];


                  function random_selector(array) {
                  var random = array[Math.floor(Math.random() * array.length)];
                  return random;
                }

var randomResponse = random_selector(responses);

// console.log(randomResponse);


function fakeAnswers() {
var departmentAnswers = [];
for (var i = 1; i <= 10; i++){
  departmentAnswers.push(random_selector(responses));
}
return departmentAnswers;
}
var tenResponses = fakeAnswers();

// console.log(tenResponses);



function fakeAnswers50 () {
var companyAnswers = [];
for (var i = 1; i <= 5; i++) {
  companyAnswers.push(fakeAnswers());
}
return companyAnswers;
}

var fiftyResponses = fakeAnswers50();

console.log(fiftyResponses);

// iteration2

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

 var charBirth = [];
 function sepBirth(){
 while (birthdays.length > 0 ){
   charBirth.push(birthdays.splice(0,2));
 }
 return charBirth;
 }

 var birth = sepBirth();

//  console.log(birth);

 var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
                    "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];

var charBirth2 = [];
  function sepBirth2(){
  while (moreBirthdays.length > 0 ){
    charBirth2.push(moreBirthdays.splice(0,2));
  }
  return charBirth2;
  }

  var birth2 = sepBirth2();
  // console.log(birth2);


var fullList = birth.concat(birth2);

console.log(fullList);

// iteration3

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
    for(var i = 0; i <= password.length; i++) {
        for(var j = i+1; j <= password.length; j++) {
            if(password[j] == password[i]) {
                return "Ouch bad password";
            }
        }
    }
    return "Good password";
};

var goodPsw = noRepeatChar(goodPsswd);
// "Good password."

var badPsw = noRepeatChar(badPsswd);
// "Ouch, bad password."

console.log(goodPsw);
console.log(badPsw);

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function (pswd) {
if (pswd.match(/[a-z]/i)) {
   return "Ouch, Bad Password";
}
else {
  return "Good Password";
}
};

var goodP = onlyNumbers(goodPsswd);
// "Good password."

var badP = onlyNumbers(badPsswd);
// "Ouch, bad password."

console.log(goodP);
console.log(badP);

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";


var trimPassword = function (password) {
 if (password.length > 10){
   return password.slice(0,10);
 }
 else {
   return password;
 }
};
var badPs = trimPassword(badPsswd);
// "1234567890"

var goodPs = trimPassword(goodPsswd);

console.log(badPs);
console.log(goodPs);
