var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var employeeSatisfaction = function() {
	
	function randomOpinion(array) {
	return _.sample(array);
	}

	function arrayOpinions(num){
	var resultArray = [];
	for (i = 0; i < num; i++) {
		resultArray.push(randomOpinion(opinions));
	}
	return resultArray;
}

	function matrixOpinions(num){
	var resultArray2 = [];
	var resultArray1 = _.concat(resultArray2, [arrayOpinions(10)], 
		[arrayOpinions(10)], [arrayOpinions(10)], [arrayOpinions(10)], [arrayOpinions(10)])
	return resultArray1;
}
	
	return matrixOpinions()
}

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
 	var array = password.split('');
 	var duplArray = _.uniq(array)
 	if (array.length == duplArray.length) {
 		console.log("Good password")
 	} else {
 	console.log("ERROR!")
 	console.log(duplArray, array)
 }
};

// noRepeatChar(goodPsswd);
// noRepeatChar(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
	var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
	var array = password.split('');
	var duplArray = _.pullAll(array, numbers)
	if (duplArray.length > 0) {
		console.log("ERROR")
	} else {
		console.log("Good password")
	}
}
// onlyNumbers(goodPsswd);
// onlyNumbers(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
	var array = password.split('');
	if (array.length <= 10) {
		return password;
	}
	else {
		var splitArray = _.slice(array, 0, 10)
		return splitArray.join('');
	}
 //your code goes here
}
console.log(trimPassword(badPsswd));
