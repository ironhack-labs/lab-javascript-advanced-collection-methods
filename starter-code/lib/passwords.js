//PASSWORD no-repeats function

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  if (password.split('').length === _.uniq(password.split('')).length) {
    console.log("Password accepted");
  }  else {
    console.log("Error! Use unique characters.");
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

//PASSWORD only-numbers function no Lodash

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function (password) {
  if (parseInt(password).toString().length === password.length) {
    console.log("Password accepted");
  }  else {
    console.log("Error! Use unique characters.");
  }
};

onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

//PASSWORD only-numbers function using Lodash!

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers2 = function (password) {
  if ((_.filter((password.split("")), function(o) {return _.isFinite(parseInt(o));})).length === password.split("").length) {
    console.log("Password accepted");
  }  else {
    console.log("Error! Use unique characters.");
  }
};

onlyNumbers2(goodPsswd);
onlyNumbers2(badPsswd);

//PASSWORD only 10 symbols

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

console.log(_.truncate(badPsswd, {"length" : 10, "omission" : ""}));

var trimPassword = function (password) {
   return _.truncate(password, {"length" : 10, "omission" : ""});
};

var newpassword = trimPassword(badPsswd);

console.log(newpassword);
