// create a function that receives a password and returns an error if every char in the password is not unique.

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 _.times(_.sortedUniqBy(password).length === password.length)
 return password;
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

// Create a function that receives a password and returns an error if the
//password has any character different than numbers.

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 _.times(_.isNaN(password))
 return password;
}
onlyNumbers(goodPsswd + " Well done");
onlyNumbers(badPsswd + "  Not valid password, please try again (only numbers noob)");

// Create a function that trim the password and turns it into a 10 digits password.
// The function should keep the first 10 digits and discard the rest of them.

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  return _.join(_.slice(password, 0, 10))
}
console.log(trimPassword(badPsswd));
