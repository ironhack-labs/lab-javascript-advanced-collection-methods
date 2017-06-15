var _ = require('lodash');

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function random () {
  return _.sample(opinions);}

function repeat (a) {
  return _.times(a, random); }

var newArray = repeat(10, random (opinions));

console.log(newArray);
