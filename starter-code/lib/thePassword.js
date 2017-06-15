var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function(e) {
 return _.uniq(e).length == e.length; 
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

// var goodPsswd = "1234567890";
// var badPsswd = "1a234567890";

// var onlyNumbers = function(i) {
//   return _.isFinite(i)
// };

// onlyNumbers(goodPsswd);
// onlyNumbers(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

var trimPassword = function(password) {
  return _.truncate(password, {length: 10, omission: ""});
}

trimPassword(badPsswd);
