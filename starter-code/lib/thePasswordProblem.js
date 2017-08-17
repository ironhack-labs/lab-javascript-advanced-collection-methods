var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var array = [];
var noRepeatChar = function (password) {
	array = _.uniq(password.split(""));
	if(array.length === password.length){
		console.log("Your password is fine!");
	}
	else{
		console.log("Please change your password");
	}
};

noRepeatChar(goodPsswd);

noRepeatChar(badPsswd);

var _ = require('lodash');
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var array = []
var resultado = ""


var onlyNumbers = function (password) {
		array = password.split();
			console.log(array)
		var final = array.map(function(number){

			return _.toNumber(number);

		})
		final.forEach(function(n){
				if (_.isNaN(n)===true){

				resultado = "You have a letter in your password";
				return;
		}
			else{
				resultado = "Enorabuena";
			}
		})
		console.log(resultado)
}

onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {

	if(password.length > 10){
		return password.slice(0,11);
	}
	else{
		return "your password doesnt have more than 10";
	}
}
trimPassword(badPsswd);
trimPassword(goodPsswd);
