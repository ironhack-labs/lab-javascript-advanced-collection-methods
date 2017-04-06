var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
 var split = _.uniq(password);
 if (password !== split.join("")){
   console.log("This is a bad password!");
 } else {
   console.log("This is good password!");
 }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function (password) {
  var array = _.uniq(password);
  var without = _.without(array, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  var emptyArray = [];
  var isEqual = _.isEqual(without, emptyArray);
  if ( isEqual === true ){
    console.log("This is a good password!");
  } else {
    console.log("This is bad password!");
  }
};
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

var trimPassword = function (password) {
 if (password.length > 10){
   var takeOut = _.take(password, 10);
   var newpassword = takeOut.join("");
   console.log(newpassword);
 } else {
   console.log(password);
 }
};
trimPassword(goodPsswd);
trimPassword(badPsswd);
