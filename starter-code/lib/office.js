var _ = require('lodash');
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
// Lodash

// => 2


//console.log(opinions)
function samples () {
  return _.sample(opinions);
}

function x () {
  return _.times(9, samples);
}

function y (){
  return _.times(5, x);
}

console.log(y());
