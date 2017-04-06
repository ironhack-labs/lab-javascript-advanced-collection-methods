//1 Office

lodash = require('lodash');
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var office=[];
var officesTotal=[];

function randomValue(opinionsArg){
  return lodash.sample(opinionsArg);
}

function pushArrayString(timesArg, elements){

   return lodash.times(timesArg,randomValue.bind(null,elements));
}

function pushArrayArray(timesArg1, timesArg2, elements){

   return lodash.times(timesArg1,pushArrayString.bind(null,timesArg2,elements));
}

officesTotal = pushArrayArray(5,10,opinions);

console.log(officesTotal);

//2 HarryPotter

var lodash = require('lodash');

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


function chunkArray(elements, chunkSize){
  return lodash.chunk(elements, chunkSize);
}


function concatArray(elements1,elements2){
  return lodash.concat(elements1,elements2);
}

birthdays = chunkArray(birthdays,2);
moreBirthdays = chunkArray(moreBirthdays,2);

birthdays = concatArray(birthdays,moreBirthdays);

console.log(birthdays);

//3 PassWord

//Unique characters
var lodash = require('lodash');



var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {

    var temp = lodash.uniq(password);

    return temp.length === password.length ? true : false;
 };


console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

//only numbers
var lodash = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {

  var temp = lodash.filter(password, function(element){
  var num = false;
    for(var i=0;i<10;i++)
    {
      if(i == element)
        num = true;
    }
    return num;
  });

  return temp.length === password.length ? true : false;
};

console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));

//only 10 digits

var lodash = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {

   return lodash.truncate(password, {'length':10,'omission': ''});

};

badPsswd = trimPassword(badPsswd);

console.log(badPsswd);

//4 Abbey Road

//Count Records in 1930's month 11

var lodash = require('lodash');

function findYearMonth(record, fromYear, toYear, month){

  var temp = lodash.filter(record, function(element){
    var num = false;
    for(var i=fromYear;i<=toYear;i++)
    {
      if(i == element.year && element.month == month)
        num = true;
    }
    return num;
  });

  return temp;
}

function uniqueArtist(thirtysListArg){
  return lodash.uniqBy(thirtysListArg, function (element) {
    return element.artist;
  });
}

function countRecords(thirtysListArg, artistsListArg){

  var temp;
  var max="";

  lodash.forEach(artistsListArg, function(value) {
    var num = false;
    temp = lodash.filter(thirtysListArg, function(element){
        return value.artist == element.artist;
    });
    if(temp.length>max.length)
      max=temp;
  });

  return max;
}

var thirtysList = findYearMonth(abbeyRoadRecords, 1930, 1939,11);

var artistsList = uniqueArtist(thirtysList);

var maxArtist = countRecords(thirtysList, artistsList);

maxArtist = uniqueArtist(maxArtist);

console.log(maxArtist[0].artist);

//Count records in total

var lodash = require('lodash');

function uniqueArtist(recordArg){
  return lodash.uniqBy(recordArg, function (element) {
    return element.artist;
  });
}

function countRecords(recordArg, artistsListArg){

  var temp;
  var max="";

  lodash.forEach(artistsListArg, function(value) {
    var num = false;
    temp = lodash.filter(recordArg, function(element){
        return value.artist == element.artist;
    });
    if(temp.length>max.length)
      max=temp;
  });

  return max;
}


var artistsList = uniqueArtist(abbeyRoadRecords);

var maxArtist = countRecords(abbeyRoadRecords, artistsList);

maxArtist = uniqueArtist(maxArtist);

console.log(maxArtist[0].artist);

//Last year of the Beatles in abbeyRoadRecords

var lodash = require('lodash');

function artistFinder(recordArg, artistName){

    var temp;

    temp = lodash.filter(recordArg, function(element){
        return element.artist === artistName ;
    });

    return temp;
}

function lastYear(recordArg){

    return lodash.maxBy(recordArg, 'year' );
}

var artistObj = artistFinder(abbeyRoadRecords, "The Beatles");

var yearObj = lastYear(artistObj);

console.log(yearObj.year);

//Last song in the 1960's
var lodash = require('lodash');

function findYear(record, fromYear, toYear){

  var temp = lodash.filter(record, function(element){
    var num = false;
    for(var i=fromYear;i<=toYear;i++)
    {
      if(i == element.year)
        num = true;
    }
    return num;
  });

  return temp;
}

function lastYear(recordArg){

    var temp = lodash.maxBy(recordArg, 'year' );

    return temp.year;
}

function songsFinder(recordArg, lastYear){

    var temp;

    temp = lodash.filter(recordArg, function(element){
        return element.year === lastYear ;
    });

    return temp;
}


function lastSongRecorded(lastYearSongsArg){
  return lastYearSongsArg[lastYearSongsArg.length-1].song;
}

var sixtiesList = findYear(abbeyRoadRecords,1960,1969);
var lastYear = lastYear(sixtiesList);
var lastYearSongs = songsFinder(sixtiesList, lastYear);
var lastSong = lastSongRecorded(lastYearSongs);

console.log(lastSong);
