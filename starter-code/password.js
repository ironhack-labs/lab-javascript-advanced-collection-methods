//Unique password
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function(password) {
	if (!_.isEqual(_.uniq(password).length, password.length)) {
		console.log("ERROR: Password contains duplicate characters.");
	}
};
noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

//Only numbers
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function(password) {
	if (_.isNaN(_.toNumber(password))) {
		console.log("ERROR: Password can only contain numbers.");
	}
};
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

//10 digits only
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function(password) {
	return _.toString(_.take(password, 10));
};
console.log(trimPassword(badPsswd));
