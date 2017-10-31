var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  for (var i=0; i<password.length; i++) {
    if ((password.indexOf(password[i]))!==i) {
      return "Bad password";
    }
  }
  return "Good password";
};

console.log(noRepeatChar(goodPsswd));
//"Good password."

console.log(noRepeatChar(badPsswd));
// "Ouch, bad password."


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function (password) {
 for (var i=0; i<password.length; i++) {
    if (isNaN(password[i])) {
      return "Bad password";
    }
  }
  return "Good password";
};

console.log(onlyNumbers(goodPsswd));
// "Good password."

console.log(onlyNumbers(badPsswd));
// "Ouch, bad password."



var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

var trimPassword = function (password) {
    return password.substring(0,9);
};


console.log(trimPassword(badPsswd));
// "1234567890"
