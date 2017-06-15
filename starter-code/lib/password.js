var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  var uniqueness = _.uniq(password);
 if (uniqueness.length < password.length){
 alert("Incorrect password");
 }
};

noRepeatChar(badPsswd);
noRepeatChar(badPsswd);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 var newNumber = Number(password);
 if (isNaN(newNumber)){
 alert("Incorrect password")
 }
}
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  if (password.length > 10){
    return  _.slice(password,0,10).join('');
  } else {
    return password;
  }
};

trimPassword(goodPsswd);
trimPassword(badPsswd);
