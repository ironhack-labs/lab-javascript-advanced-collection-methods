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

console.log(makeAllDepAnswers(responses));