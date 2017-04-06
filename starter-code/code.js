//Iteration 1 The Office

var opinions = [ "This is the best job ever",
"Satisfied",
"At least I get paid",
"I'm looking for another job",
"I don't want to answer"];

var employeeSatisfaction = function () {

	var randOpinions = function (){
		return _.sample(opinions);
	}

	var fillNewArray = function(){

		return _.times(10, randOpinions);

	}

	var fillNewArray2 = function(){
		return _.times(5, fillNewArray)
	}

	return fillNewArray2();
};

console.log(employeeSatisfaction());

//Iteration2 harry Potter's Birthday

var birthdays = ["Severus Snape", "9 January", "Arthur Weasley", "6 February",
"Ron Weasley", "1 March", "Remus Lupin", "10 March",
"Fred & George Weasley", "1 April", "Pomona Sprout", "15 May",
"Draco Malfoy", "5 June", "Dobby", "28 June",
"Neville Longbottom", "30 July", "Harry Potter", "31 July",
"Ginevra Weasley", "11 August", "Percy Weasley ", "22 August",
"Hermione Granger", "19 September", "Minerva McGonagall",
"4 October", "Filius Flitwick", "17 October", "Molly Weasley",
"30 October", "Bill Weasley", "29 November", "Rubeus Hagrid",
"6 December", "Charlie Weasley", "12 December"];

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
"Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

function groupArray(array){
	return _.chunk(array, 2)
}

function addToArray(array1, array2){
	return _.concat(groupArray(array1), groupArray(array2))
}

console.log(addToArray(birthdays, moreBirthdays));


//Iteration3 The Password Problem 

//exercise 1
var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (pwd){
	var b = _.uniq(pwd).length === pwd.length ? "your password is fine" : "your password has a duplicate";

	console.log(b)
}
noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

//exercise 2
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function password2(pwd){
	var result = _.toNumber(pwd) ? "your password is fine" : "your password has a character";

	console.log(result);
}

onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

//exercise 3
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

var trimPassword = function(pwd){
	return _.join(_.slice(pwd, 0, 10), "");
}
trimPassword(badPsswd);

//Iteration4 abbey Road Studios

var novemberArtists = function () {
	var test = [];
	_.each(abbeyRoadRecords, function(element){

		if (_.has(element, "month") && element.month === 11){
			test.push(element.artist);
		}

	});
	var test2 = _.countBy(test);
	var test3 = 0;

	for (var key in test2){

		if(test3<test2[key]){
			test3=test2[key];
		}

	}
	return _.findKey(test2, _.partial(_.isEqual, test3));
};

console.log(novemberArtists());

var bestArtist = function () {
	var test2 = _.countBy(abbeyRoadRecords, "artist");

	var test3 = 0;

	for (var key in test2){

		if(test3<test2[key]){
			test3=test2[key];
		}

	}
	return _.findKey(test2, _.partial(_.isEqual, test3));
};

console.log(bestArtist());


var novemberArtists = function () {
	var artistList = [];
	_.each(abbeyRoadRecords, function(element){

		if (_.has(element, "month") && element.month === 11){
			artistList.push(element.artist);
		}});
	var countList = _.countBy(artistList);
	var maxTimes = 0;

	for (var key in countList){

		if(maxTimes<countList[key]){
			maxTimes=countList[key];
		}

	}
	return _.findKey(countList, _.partial(_.isEqual, maxTimes));
};

novemberArtists();

var bestArtist = function () {
	var countList = _.countBy(abbeyRoadRecords, "artist");

	var maxTimes = 0;

	for (var key in countList){

		if(maxTimes<countList[key]){
			maxTimes=countList[key];
		}

	}
	return _.findKey(countList, _.partial(_.isEqual, maxTimes));
};

console.log(bestArtist());


var lastBeatlesSong = function () {
	var songs = _.filter(abbeyRoadRecords, function(el){
		return _.has(el, "artist") && el.artist === "The Beatles";
	});
	return _.maxBy(songs, "year")
};

console.log(lastBeatlesSong());
