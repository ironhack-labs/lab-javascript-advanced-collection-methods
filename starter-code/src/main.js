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

console.log(combineArr(birthdays, moreBirthdays));
