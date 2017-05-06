// Iteration 1 - The Office

// Create an array that matches these opinions.
var opinions = [ "This is the best job ever",
	"Satisfied",
	"At least I get paid",
	"I'm looking for another job",
	"I don't want to answer" ];

// Create a function that randomly picks up one of these items in the opinions array.
// Without Lodash
function randomPick(opinion) {
	return opinion[Math.floor(Math.random() * opinion.length)];
}

// With Lodash
function randomPickLodash(opinion) {
	return _.sample(opinion);
}

// Create a function that pushes the item into the array. You will need to repeat this procedure ten times to create an array of 10 opinions.
// Without Lodash
function pushInto1DArray() {
	var array = [];
	for (var i = 0; i < 10; i++) {
		array.push(randomPick(opinions));
	}
	return array;
}

// Without Lodash
function pushInto1DArrayLodash() {
	var array = [];
	_.times(10, function() {
		array.push(randomPick(opinions));
	});
	return array;
}

// Create another function that pushes the 10-items-array into another array. You will need to do this five times to create the five departments. At the end you will have something like the function below:
// Without Lodash
function pushInto2DArray(array) {
	var array = [];
	for (var i = 0; i < 5; i++) {
		array.push(pushInto1DArray());
	}
	return array;
}

// Without Lodash
function pushInto2DArrayLodash(array) {
	var array = [];
	_.times(5, function() {
		array.push(pushInto1DArray());
	});
	return array;
}

// Show your result in the console.
console.log(randomPick(opinions));
console.log(randomPickLodash(opinions));
console.log(pushInto1DArray());
console.log(pushInto1DArrayLodash());
console.log(pushInto2DArray());
console.log(pushInto2DArrayLodash());


// Iteration 2 - Harry Potter's Birthdays
// Create a function that receives an array and returns an array of two dimensions. Each internal array should have the name of one character and his date of birthday.

// Without Lodash
function splitArray(array) {
	var names = array.filter(function(value, index) {
		return index % 2 === 0;
	});
	var birth = array.filter(function(value, index) {
		return index % 2 === 1;
	});
	var result = [];
	for (var i = 0; i < names.length; i++) {
		result[i] = [];
		result[i].push(names[i]);
		result[i].push(birth[i]);
	}
	return result;
}

console.log(splitArray(birthdays));

// Now that we have our two-dimensions array, we notice that some of the birthdays are missing. But we found another array with birthdays from the book.
var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
	"Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];

// Create a function that add this array above to the first one you manipulated with the same format. The function should return an array with all the birthdays in pairs.

// Without Lodash
function joinArray(array1, array2) {
	var result = [];
	array1.push(array2);
	for (var i = 0; i < array1.length; i++) {
		if (Array.isArray(array1[i])) {

			for (var j = 0; j < array1[i].length; j++) {
				result.push(array1[i][j]);
			}
		} else {
			result.push(array1[i]);
		}
	}
	array1.pop();  // Used to remove array2 from array1 in order to keep array as it was
	return splitArray(result);
}

console.log(joinArray(birthdays, moreBirthdays));

// With Lodash

function joinArrayLodash(array1, array2) {
	array1.push(array2);
	return splitArray(_.flatten(array1));
}

console.log(joinArrayLodash(birthdays, moreBirthdays));


// Iteration 3 - The Password Problem

// Different characters: create a function that receives a password and returns an error if every char in the password is not unique.

var goodPsswd = "1234567890";
var badPsswd = "1123456";

// Without Lodash
var noRepeatChar = function(password) {
	for (var i = 0; i < password.length; i++) {
		if (password.indexOf(password[i], i + 1) > 0) {
			return false;
		}
	}
	return true;
};

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

// Only numbers: Create a function that receives a password and returns an error if the password has any character different than numbers.

var goodPsswd2 = "1234567890";
var badPsswd2 = "1a234567890";
var onlyNumbers = function(password) {

	// Use a regex that matches every case that is not a number
	return password.match(/[^\d]/) === null ? true : false;
};
console.log(onlyNumbers(goodPsswd2));
console.log(onlyNumbers(badPsswd2));

// Ten digits only: Create a function that trim the password and turns it into a 10 digits password. The function should keep the first 10 digits and discard the rest of them.
var goodPsswd3 = "1234567890";
var badPsswd3 = "12345678901234567890";
var trimPassword = function(password) {
	if (password.length > 10) {
		return password.substr(0, 10);
	}
	return password;
};
console.log(trimPassword(goodPsswd3));
console.log(trimPassword(badPsswd3));


// Iteration 4 - Abbey Road Studios
// November looks like a good month: In the 30's, they use to gather information about the months when the recordings where made. Get the artist who recorded the most on November in Abbey Road.

var novemberArtists = function(array) {
	var aux = array.filter(function(value) {
		return value.month === 11;
	});
	var best = [];
	var index = [];
	for (var i = 0; i < aux.length; i++) {
		if (typeof aux[i] !== "undefined") {

			if (best.includes(aux[i].artist)) {
				index[best.indexOf(aux[i].artist)]++;
			} else {
				best.push(aux[i].artist);
				index.push(1);
			}
		}
	}
	return best[index.indexOf(Math.max.apply(null, index))];  // Use of apply(null, index) with Math.max for arrays

};

//Remember to execute the function to actually assing the value to the var.
console.log(novemberArtists(abbeyRoadRecords));


// Artists like to repeat: Get the artist who recorded the most times in Abbey Road.

var bestArtist = function(array) {
	var best = [];
	var index = [];
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] !== "undefined") {

			if (best.includes(array[i].artist)) {
				index[best.indexOf(array[i].artist)]++;
			} else {
				best.push(array[i].artist);
				index.push(1);
			}
		}
	}
	return best[index.indexOf(Math.max.apply(null, index))];  // Use of apply(null, index) with Math.max for arrays
};

//Remember to execute the function to actually assing the value to the var.
console.log(bestArtist(abbeyRoadRecords));

// The Beatles and Abbey Road: When did the four of Liverpool recorded their last song in Abbey Road Studios?
var lastBeatlesSong = function(array) {
	var lastMonth = 0;
	var lastYear = 0;
	var lastSong = "";
	var result = [];
	result = array.filter(function(value) {
		return value.artist === "The Beatles";
	});
	for (var i = 0; i < result.length; i++) {
		if (result[i].year > lastYear || (result[i].year === lastYear && result[i].month > lastMonth)) {
			lastYear = result[i].year;
			lastMonth = result[i].month;
			lastSong = result[i].song;
		}
	}
	return lastSong;
};

//Remember to execute the function to actually assing the value to the var.
console.log(lastBeatlesSong(abbeyRoadRecords));

//Sixties crazyness: The sixties were a crazy decade. Could you retrieve the last song it was recorded in Abbey Road Studios in the decade of 1960's?
var sixtiesSong = function(array) {
	var lastMonth = 0;
	var lastYear = 0;
	var lastSong = "";
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] !== "undefined") {
			if ((array[i].year > lastYear || (array[i].year === lastYear && array[i].month > lastMonth)) && array[i].year < 1970) {
				lastYear = array[i].year;
				lastMonth = array[i].month;
				lastSong = array[i].song;
			}
		}
	}
	return lastSong;
};

//Remember to execute the function to actually assing the value to the var.
console.log(sixtiesSong(abbeyRoadRecords));
