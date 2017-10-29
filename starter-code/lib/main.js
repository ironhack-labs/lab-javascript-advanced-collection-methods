//Iteration 1

var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];

// console.log(makeRandomSurvey(responses));

var employeeSatisfaction = function (array) {
	function findRandomResponse (array) {
	var randomNum = Math.floor(Math.random() * array.length);
	return array[randomNum];
}

	function makeRandomSurvey (array) {
	var newArray = [];
	for (var i =0; i < 10; i++){
	newArray.push(findRandomResponse(array));
	}
	return newArray;
}
	var allSurveys = [];
	for (var i = 0; i < 5; i++) {
		allSurveys.push(makeRandomSurvey(array))
	}
	return allSurveys;
}

console.log(employeeSatisfaction(responses));

//Iteration 2

function makeBirthArray(array) {
	var birthArray = [];
	for (var i = 0; i < array.length; i++) {
		if (i % 2 === 0) {
			birthArray.push(array[i]);
		}
	}
	return birthArray;
}

function makeNameArray(array) {
	var nameArray = [];
	for (var i = 0; i < array.length; i++) {
		if (i % 2 === 1) {
			nameArray.push(array[i])
		}
	}
	return nameArray;
}

var births = makeBirthArray(birthdays);
var names = makeNameArray(birthdays);

function makeOrganizedArrays(array){
	var organizedArray = [];
	var names = makeNameArray(array);
	var births = makeBirthArray(array);
	if (names.length !== births.length) {
		return organizedArray;
	}
	for (var i = 0; i < names.length; i++ ) {
		organizedArray[i] = [names[i], births[i]];
	}
	return organizedArray;
}

console.log(makeOrganizedArrays(birthdays));

var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
                      "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];

console.log(makeOrganizedArrays(moreBirthdays));

var list1 = makeOrganizedArrays(birthdays);
var list2 = makeOrganizedArrays(moreBirthdays);

function combineArrays(array1, array2) {
	var combinedArray = array1;
	for (var i = 0; i < array2.length; i++) {
		combinedArray.push(array2[i]);
	}
	return combinedArray;
}

console.log(combineArrays(list1, list2));

//Iteration 3

var goodPsswd = "1234567890";
var badPsswd = "01123456";
var bad2 = "320472";
var noRepeatChar = function (password) {
 	for (var i=0; i<password.length; i++) {
		for (var j=0; j<password.length; j++) {
			if (i === j) {
				break;
			}
			else {
				if (password[i] === password[j]) {
					console.log("Ouch, bad password");
					return false;
				}
			}
		}
	}
	console.log("Good password");
	return true;
};

noRepeatChar(goodPsswd);
// "Good password."

noRepeatChar(badPsswd);
// "Ouch, bad password."
noRepeatChar(bad2);

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var bad = "adfs1234234";
var onlyNumbers = function(password) {
 	for (var i = 0; i<password.length; i++) {
 		if (isNaN(password[i])) {
 			console.log("Ouch, bad password");
 			return false;
 		}
 	}
 	console.log("Good password.");
 	return true;
};

onlyNumbers(goodPsswd);
// "Good password."

onlyNumbers(badPsswd);
// "Ouch, bad password."
onlyNumbers(bad);

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 	var correctLengthPass = "";
 	for (var i = 0; i < 10; i++) {
 		correctLengthPass += password[i];
 	}
 	console.log(correctLengthPass);
 	return correctLengthPass;
};
trimPassword(badPsswd);
// "1234567890"

//Iteration 5

var novemberArtists = function(array) {
	var novemberArtists = array.filter(function(song){
		return song.month === 11;
	});
	var justNames = novemberArtists.map(function(song){
		return song.artist;
	});
	return justNames;
};

console.log(novemberArtists(abbeyRoadRecords));

var bestArtist = function (array) {
 	var topArtist = array[0].artist;
 	var mostTimes = 0;

 	for (var i = 0; i<array.length; i++){
 		var counter=0;
 		for (var j = 0; j<array.length;j++) {
 			if (i===j)
 				break;
 			else {
 				if (array[i].artist===array[j].artist) {
 					counter++;
 				}
 			}
 		}
 		if (counter > mostTimes) {
 			topArtist = array[i].artist;
 			mostTimes = counter;
 		}
 	}
	return topArtist;
};

console.log(bestArtist(abbeyRoadRecords));

var lastBeatlesSong = function (array) {
  var beatlesSongs = array.filter(function(song){
  	return song.artist === "The Beatles";
  });
  var lastBeatlesSong = beatlesSongs.sort(function(a,b){
  	if (a.year < b.year) {
  		return -1;
  	}
  	if (a.year > b.year) {
  		return 1;
  	}
  	return 0;
  });
  var keyIndex = lastBeatlesSong.length-1;
  return lastBeatlesSong[keyIndex];
};

console.log(lastBeatlesSong(abbeyRoadRecords));

var sixtiesSong = function (array) {
  var allSixtiesSongs = array.filter(function(song){
  	return song.year === 1969;
  });
  if (allSixtiesSongs.length === 0){
  	console.log("Your database is incomplete.");
  }
  var songsByMonth = allSixtiesSongs.sort(function(a, b){
  	if (a.month < b.month) {
  		return -1;
  	}
  	if (a.month > b.month) {
  		return 1;
  	}
  	return 0;
  });
  // console.log(songsByMonth);
  var keyIndex = songsByMonth.length-1;
  return songsByMonth[keyIndex];
};

console.log(sixtiesSong(abbeyRoadRecords));
