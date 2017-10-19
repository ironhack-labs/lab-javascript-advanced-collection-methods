var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  console.log(password.length == _.uniq(password).length);
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 return _.parseInt(password) == password;
}

onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 return _.join((_.slice(password, 0, 10)), '');
}
trimPassword(badPsswd);
