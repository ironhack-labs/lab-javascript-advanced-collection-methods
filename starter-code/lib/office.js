var _ = require('lodash');
var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];

function randomOpinion() {
  return opinions[_.random([upper = opinions.length - 1])];
}

var employeeSatisfaction = function() {
  var newArray = [
    [],
    [],
    [],
    [],
    []
  ];

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 10; j++) {
      newArray[i].push(randomOpinion());
    }
  }

  return newArray;
}

console.log(employeeSatisfaction());
