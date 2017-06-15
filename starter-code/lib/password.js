var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  check = _.uniq(password);
  if (check.length != password.length) {
   console.log(password + ' - bad password');
  } else {
    console.log(password + ' - good password');
  }
};


noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function () {
 numberCheck = _.isNumber()
}
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 //your code goes here
}
trimPassword(badPsswd);


var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
return _.dropRight(password)
}
trimPassword(badPsswd);