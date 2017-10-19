var _ = require('lodash');


var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  var arr = password.split("");
  var newArr = _.uniq(arr);
  return arr.length == newArr.length;
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
