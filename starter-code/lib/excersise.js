

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
  
  
  
function select10Opinions(){  
           
  return _.times(10,function(){
    return opinions[Math.floor(Math.random() * 5)];
  })
  
}
console.log(select10Opinions());


var employeeSatisfaction = [];
function call5times(){
return _.times(5,select10Opinions);
}
  
employeeSatisfaction = call5times();


console.log(employeeSatisfaction);

// Exercise 2 

function nameBirthday(array) {
return _.chunk(array, 2);
}

var orderedBday = nameBirthday(birthdays)
console.log(orderedBday);


var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];
                     
function concatBday (a , b){                     
return _.concat(a, b);
}


var nameBirthday2 = nameBirthday(moreBirthdays)

var finalBday = concatBday(orderedBday, nameBirthday2);
console.log(finalBday);





// Exercicse 3


var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  var UniquePassword = createUniq(password);
  if (password.length == UniquePassword.length){
    return "Good Password";
  } else {
    return "Bad Password";
  }
};

function createUniq (array){
 return _.uniq(array);
}

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));



var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
  var testType = true; 
  for (var i = 0; i < password.length; i++) {
    if (isNaN(parseInt(password[i]))){
      testType = false;
    }
    } 
    return testType;
}

console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));





var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

var trimPassword = function (password) {
return _.join(_.slice(password, 0, 10), '');
}


trimPassword(badPsswd);

// Exercise 4

var novemberArtists = function (arr) {

  var novemberSongs = _.filter(arr, function(elem){
   
    if (_.has(elem, 'month') && elem.month === 11) {
      return true;
    } else {
      return false;
    }
  });

  
    return countArtist(novemberSongs);
}

function countArtist (arr) {
  var artistCounts = _.countBy(arr, 'artist');

  var maxSongs = 0;
  var maxArtist = '';
  
   for (var key in artistCounts) {
     if(artistCounts[key] > maxSongs) {
        maxSongs = artistCounts[key];
        maxArtist = key;
      }
      
   }
   
   return maxArtist;

}


console.log(novemberArtists(abbeyRoadRecords));


var bestArtist = function (arr) {
 return countArtist(arr);
};

console.log(bestArtist(abbeyRoadRecords));


var lastBeatlesSong = function (arr) {
  
  var beatlesSongs = _.filter(arr, function(elem) {
    return _.has(elem, 'artist') && elem.artist == "The Beatles";
  });
 
 return _.maxBy(beatlesSongs, 'year');
};


console.log(lastBeatlesSong(abbeyRoadRecords));


var sixtiesSong = function (arr) {
  var sixtiesSongs = _.filter(arr, function(elem) {
    return  _.has(elem, 'year') && elem.year < 1970 && elem.year > 1959;
  });
 
 var maxYear = _.maxBy(sixtiesSongs, 'year');
 
 var lastYearSongs = _.filter(arr, function(elem) {
    return  _.has(elem, 'year') && elem.year===maxYear.year;
  });

 var maxMonth = _.maxBy(lastYearSongs, 'month');
 return maxMonth;
};

console.log(sixtiesSong(abbeyRoadRecords));

