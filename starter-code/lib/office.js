var _ = require('lodash');

var opinions = [
  "This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"];

  function random () {
    return _.random (opinions, 4);
  }

  console.log (opinions [random ()])

  function multiplyOpinions () {
  var opinions = [];
  for (var i=0; i < 10; i++) {
    var op = random ()
    opinions.push (op);
  }

  return opinions;
  }

  var employeeSatisfaction = function () {
    array [];
    for (var i = 0; i < 5; i++)
    array.push (multiplyOpinions())

  return array;
};

console.log (employeeSatisfaction)
