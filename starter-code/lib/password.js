var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  //your code goes here
  newPass = password.split("");
  newPass.sort();
  valid = "Good password.";
  newPass.sort(function(a, b){
    if(a - b === 0){
      valid = "Ouch, bad password.";
    }
  });
  console.log(password);
  console.log(valid);
};

noRepeatChar(goodPsswd);
// "Good password."

noRepeatChar(badPsswd);
// "Ouch, bad password."

// ***********************************************

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 //your code goes here
 console.log(password);
 isNaN(password) ? console.log("Ouch, bad password.") : console.log("Good password.");
};

onlyNumbers(goodPsswd);
// "Good password."

onlyNumbers(badPsswd);
// "Ouch, bad password."

// ***********************************************

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 //your code goes here
 newPass = password.split("").filter(function(elem, index){
   if(index < 10){
     return elem;
   }
 });
 return newPass.toString();
};
trimPassword(badPsswd);
// "1234567890"