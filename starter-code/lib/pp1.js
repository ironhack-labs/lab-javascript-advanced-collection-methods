var opinions = [
 "This is the best job ever",
"Satisfied.",
"At least I get paid.",
"I'm looking for another job.",
"I don't want to answer."
];

function pickRandom(items){
  opinion = items[ Math.floor(Math.random() * items.length )];
  return opinion;
}


function pickRandomArray(items) {
  var randomOpinionsArray = [];
  for( var i=0; i<10; i++){
    randomOpinionsArray.push(pickRandom(items));

  }
    return randomOpinionsArray;
}

function employeeSatisfaction (items) {
  var bigArray = [];
  for (var i=0; i<5 ; i++){
    bigArray.push(pickRandomArray(items));

  }
  return bigArray;

}

console.log(employeeSatisfaction(opinions));
