var goodPsswd = "1234567890";
var badPsswd = "1123456";

function noRepeatChar(password) {
 var sortedPasword = password.split('').sort().join('');
 var noRepeatCheck = 0;
  for( var i=0; i<password.length; i++) {
   if(password[i] === password[i+1]){
     noRepeatCheck += 1;
   }}
  if(noRepeatCheck === 0) {
    return "Good password.";
  } else {
    return "Ouch, bad password";
  }
 }

console.log(noRepeatChar(goodPsswd));
// "Good password."

console.log(noRepeatChar(badPsswd));
// "Ouch, bad password."


var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 if(isNaN(password)===true){
   return "Ouch, bad password";
 } else {
   return "Good password";
 }
};

console.log(noRepeatChar(goodPsswd));
// "Good password."

console.log(noRepeatChar(badPsswd));
// "Ouch, bad password."


var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
trimedPassword= password.substring(0, 9);
return trimedPassword;
};
console.log(trimPassword(badPsswd));
