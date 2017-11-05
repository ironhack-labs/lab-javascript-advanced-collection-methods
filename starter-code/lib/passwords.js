var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
    if ( (password.split("").sort().join("").match(/(.)\1+/g)) ) {
        console.log("Ouch, bad password.");
    }
    else {
        console.log("Good password.");
    }
};

noRepeatChar(goodPsswd);
// "Good password."

noRepeatChar(badPsswd);
// "Ouch, bad password."


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 if ( isNaN(password) ) {
    console.log("Ouch, bad password.");
 }
 else {
    console.log("Good password.");
 }
};

onlyNumbers(goodPsswd);
// "Good password."

onlyNumbers(badPsswd);
// "Ouch, bad password."

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
    console.log(password.substring(0,10));
};
trimPassword(badPsswd);
// "1234567890"