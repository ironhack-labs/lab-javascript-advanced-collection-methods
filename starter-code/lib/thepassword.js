var _ = require('lodash');

var _ = require('lodash');

//First Different Characters

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function(password) {
  var arr = password.split("");
  var newArr = _.uniq(arr);
  return arr.length == newArr.length;

};
noRepeatChar(badPsswd);

//Second Part - onlyNumbers

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function(password) {
  return _.parseInt(password) == password;
};

onlyNumbers(badPsswd);

//Three ten digits only

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

var trimPassword = function(password) {
    return _.join((_.slice(password, 0, 10)), '');
  };
  trimPassword(badPsswd);
