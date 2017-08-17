//var _ = require("lodash");

var goodPsswd = "1234567890";
var badPsswd = "1123456";
/*var noRepeatChar = function (password) {
 //your code goes here
};*/

var goodArray = goodPsswd.split("");
var badArray = badPsswd.split("");
var goodSorted = _.sortedUniq(goodArray);
var badSorted = _.sortedUniq(badArray);

function compare(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return ("Error");
  } else {
    return ("Awesome!");
  }
}

var result1 = compare(goodArray, goodSorted)
var result2 = compare(badArray, badSorted);

console.log(result1);
console.log(result2);

//----------------------------

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {

  var passwordInt = 0;
  passwordInt = _.toNumber(password);

  if (_.isFinite(passwordInt) === true) {
    return "Your password is correct!";
  } else {
    return "Your password should content only numbers";
  }

 //your code goes here
}


console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));

//------------------------------

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

function shortenPassword(short) {
  var shortStep;
  shortStep = short.split("").slice(0, 10).join("");
  return shortStep;
}

var shortBadPassword = shortenPassword(badPsswd);
var shortGoodPassword = shortenPassword(goodPsswd);
console.log(shortBadPassword + " This WAS the BAD password");
console.log(shortGoodPassword + " This WAS and IS the good one");
