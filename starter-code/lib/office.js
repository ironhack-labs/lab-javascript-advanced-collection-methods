var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];
var opinionFinal;
var opinionArray = [];
var random = [];
var employeeSatisfaction = function() {
  random = _.sample(opinions);

  opinionFinal = _.times(10, random);
  opinionFinal.push(opinionArray);

  return random;
  console.log(opinion);

};
