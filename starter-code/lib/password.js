var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "12355456";
var noRepeatChar = function (password) {
  {
    if (_.uniq(password).length == password.length){
      console.log("Ok");
    } else {
    console.log("error");
    }
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function () {
  {
    if (_.isNaN(numbers)){
      console.log("Good Password");
    } else {
      console.log("Bad Password");
    }
  }
};
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);


var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 //your code goes here
}
trimPassword(badPsswd);
