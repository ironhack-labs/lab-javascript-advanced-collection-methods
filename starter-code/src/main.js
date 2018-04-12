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
  return responses[Math.floor(Math.random() * arr.length)];
}

// Creates an array of 10 random responses.
function makingUpDepAnswers() {
  let depAnswers = [];
  while(depAnswers.length < 10) {
    depAnswers.push(selectAtRandom(responses));
  }

  return depAnswers;
}

function makeAllDepAnswers() {
  let allDepAnswers = [];
  while(depAnswers.length < 5) {
    allDepAnswers.push(makingUpDepAnswers());
  }

  return allDepAnswers;
}
