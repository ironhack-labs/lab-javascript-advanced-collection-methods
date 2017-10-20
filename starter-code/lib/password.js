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

goodPsswd = "1234567890";
badPsswd = "1a234567890";


console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

// ITERATION 2 EXERCISE 3
var onlyNumbers = function (password) {
 if(password.toUpperCase().match(/[A-Z]/g)){
   return false;
 }
  else{
    return true;
  }
};


console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));

// ITERATION 3 EXERCISE 3
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 //your code goes here
 return _.truncate(password,{
  'length': 10,
   'omission': ''
 });
};
trimPassword(badPsswd);
