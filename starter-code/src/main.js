//Iteration 1 - The Office

// Array of survey answers.
const responses = [
  "This is the best job ever!",
  "Satisfied.",
  "At least I get paid.",
  "I'm looking for another job.",
  "I don't want to answer."
];

// Selects at random an element from responses.
function selectAtRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Creates an array of 10 random responses.
function makingUpDepAnswers(arr) {
  let depAnswers = [];
  while(depAnswers.length < 10) {
    depAnswers.push(selectAtRandom(arr));
  }

  return depAnswers;
}

function makeAllDepAnswers(arr) {
  let allDepAnswers = [];
  while(allDepAnswers.length < 5) {
    allDepAnswers.push(makingUpDepAnswers(arr));
  }

  return allDepAnswers;
}

// console.log(makeAllDepAnswers(responses));

// Iteration 2 - Harry Potter's Birthday

var birthdays = [
 'Severus Snape', '9 January', 'Arthur Weasley', '6 February',
 'Ron Weasley', '1 March', 'Remus Lupin', '10 March',
 'Fred & George Weasley', '1 April', 'Pomona Sprout', '15 May',
 'Draco Malfoy', '5 June', 'Dobby', '28 June',
 'Neville Longbottom', '30 July', 'Harry Potter', '31 July',
 'Ginevra Weasley', '11 August', 'Percy Weasley ', '22 August',
 'Hermione Granger', '19 September', 'Minerva McGonagall',
 '4 October', 'Filius Flitwick', '17 October', 'Molly Weasley',
 '30 October', 'Bill Weasley', '29 November', 'Rubeus Hagrid',
 '6 December', 'Charlie Weasley', '12 December'
];

// Organize birthday
function organizeBdays(arr) {
  let organizedBdays = [];
  arr.forEach(elem => {
    if (arr.indexOf(elem) % 2 === 0) {
      let singlePerson = [];
      singlePerson.push(elem, arr[arr.indexOf(elem) + 1]);
      organizedBdays.push(singlePerson);
    }
  })

  return organizedBdays;
}

// Array with additional bdays
let moreBirthdays = [ 
  'Lily Evans', '30 January', 'James Potter', '27 March', 'Dudley Dursley', '30 June', 'Tom Riddle', '31 December'
];

// Combining the content of the two bday arrays
function combineArr(arr1, arr2) {
  let bigMessyArr = arr1.concat(arr2);
  return organizeBdays(bigMessyArr);
}

// console.log(combineArr(birthdays, moreBirthdays));

// Iteration 3 - The Password Problem

// Checking for repeated characters
let noRepeatChar = function(password) {
  for (let char = 0; char < password.length; char++) {
    if (password.indexOf(password[char], char + 1) !== -1 ) {
      return 'Ouch, bad password.';
    }
  }

  return 'Good password.';
};

// let goodPsswd = '1234567890';
// let badPsswd = '1123456';

// console.log(noRepeatChar(goodPsswd));
// // 'Good password.'

// console.log(noRepeatChar(badPsswd));
// // 'Ouch, bad password.'

// Checking if the password has just numbers
let onlyNumbers = function(password) {
  if (isNaN(password)) {
    return 'Ouch, bad password.';
  }

  return 'Good password.';
};

// let goodPsswd = '1234567890';
// let badPsswd = '1a234567890';

// console.log(onlyNumbers(goodPsswd));
// // 'Good password.'

// console.log(onlyNumbers(badPsswd));
// // 'Ouch, bad password.'

// Trimming strings over 10 characters
let trimPassword = function (password) {
 return password.slice(0, 10);
};

let goodPsswd = '1234567890';
let badPsswd = '12345678901234567890';

// console.log(trimPassword(badPsswd));
// // '1234567890'

// Iteration 4 - Abbey Road Studios

let abbeyRoadRecords = [
  {song: 'Land of Hope and Glory', artist: 'Sir Edward Elgar', month: 11, year: 1931},
  {song: 'Elgar violin concerto', artist: 'Yehudi Menuhin', month: 07, year: 1932},
  {song: 'Piano Sonata, Funerailles', artist: 'Yehudi Menuhin', month: 11, year: 1932},
  {song: '', artist: 'Richard Tauber', month: 11, year: 1933},
  {song: 'Suits No. 1 & 2 Johann Sebastian Bach\'s Cello Suites', artist: 'Pablo Casals', month: 11, year: 1933},
  {song: 'Suits No. 1 & 2 Johann Sebastian Bach\'s Cello Suites', artist: 'Pablo Casals', month: 11, year: 1936},
  {song: 'I Can\'t Give You Anything but Love', artist: 'Adelaide Hall and Fats Waller', month: 08, year: 1938},
  {song: 'Symphony No. 5', artist: 'Vaughan Williams', year: 1943},
  {song: 'Help', artist: 'The Beatles', year: 1965},
  {song: 'Rubber Soul', artist: 'The Beatles', year: 1965},
  {song: 'Revolver', artist: 'The Beatles', year: 1966},
  {song: 'The Beatles (aka \'The White song\')', artist: 'The Beatles', year: 1968},
  {song: 'Bloodsucker', artist: 'Deep Purple', month: 11, year: 1969},
  {song: 'Shades of Rock', artist: 'The Shadows', year: 1970},
]

// Names of artists who recorded in November
let novemberArtists = function(arr) {
  let arrOfArtists = [];
  arr.forEach(obj => {
    if (obj.month === 11) {
      arrOfArtists.push(obj.artist);
    }
  })

  return arrOfArtists;
};

// console.log(novemberArtists(abbeyRoadRecords));

// Name of the artist who rocerded more songs
let findBestArtist = function(arr) {
  let artistArr = [];
  let recordCounter = 0;
  let bestArtist = '';
  let tempCounter = 1;
  arr.forEach(obj => { artistArr.push(obj.artist); });
  let sortedArtists = artistArr.sort();
  for (let i = 0; i < sortedArtists.length; i++) {
    if (sortedArtists[i] === sortedArtists[i + 1]) {
      tempCounter++;
      if (tempCounter > recordCounter) {
        recordCounter = tempCounter;
        bestArtist = sortedArtists[i];
      }
    } else {
      tempCounter = 1;
    }
  }

  return bestArtist;
};

// console.log(findBestArtist(abbeyRoadRecords));

// Find last Beatles song
let findLastBeatlesSong = function(arr) {
  let lastBeatlesSong = {year: 0};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].artist === 'The Beatles' && arr[i].year > lastBeatlesSong.year) {
      lastBeatlesSong = arr[i];
    } 
  }

  return lastBeatlesSong;
};

// console.log(findLastBeatlesSong(abbeyRoadRecords));

// Find last 60's song
let findLastSixtiesSong = function(arr) {
  let lastSixtiesSong = {year: 0};
  arr.forEach(elem => {
    if (elem.year >= lastSixtiesSong.year && elem.year < 1970) {
      lastSixtiesSong = elem;
    }
  })

  return lastSixtiesSong;
};

console.log(findLastSixtiesSong(abbeyRoadRecords));