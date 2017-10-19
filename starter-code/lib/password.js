var _ = require('lodash');
var goodPsswd = "1234567890";
var badPsswd = "1123456";
 // ITERATION 1
var noRepeatChar = function (password) {
  var passwordArray = password.split("");
  console.log(passwordArray);
  if (passwordArray.length != _.uniq(passwordArray).length){
    return false;
  }else
  {
    return true;
  }
};

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
  console.log(password.toUpperCase.includes(/[A-Z]/g));
 //your code goes here
};
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));
