var _ = require('lodash');

//1
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

//2
function randomOpinion() {
  var randomNumber =  _.random(0, opinions.length-1);
  return opinions[randomNumber];
}

//3
var newOpinions = [];

function pushRandomOpinion(){
  for (var i=0; i<10; i++){
    newOpinions.push(randomOpinion());
  }
}

pushRandomOpinion();
//console.log(newOpinions);

//4
var fiveItemArray = [];

function pushArray() {
  for (var i=0; i<5; i++){
    fiveItemArray.push(newOpinions);
  }
}

pushArray();
console.log(fiveItemArray); // shows result in console
