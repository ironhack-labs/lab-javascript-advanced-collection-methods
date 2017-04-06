// function that receives a password and returns an error if every char in the password is not unique

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 var uniquePassword = _.uniq(password);
 password.length === uniquePassword.length ? console.log("Password good") : console.log("Password not good");
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

// function that receives a password and returns an error if the password has any character different than numbers

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 var checkPassword = _.times(password.length-1, function(){
 	return password.match(/[a-z]/g) ? "incorrect" : "correct";
 });

 if (_.includes(checkPassword, 'incorrect')){
 	console.log("The password: " + password + " isn't valid.");
 } else {
 	console.log("The password: " + password + " is valid.");
 }}

 onlyNumbers(goodPsswd);
 onlyNumbers(badPsswd);

 // function that trims the password and turns it into a 10 digits password. The function should keep the first 10 digits and discard the rest of them.

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 var newPassword = _.slice(password, 0, 10);
 return newPassword;
};
console.log(trimPassword(badPsswd));