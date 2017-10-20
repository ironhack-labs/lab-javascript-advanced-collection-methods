var _ = require('lodash');
//office1
//Iteration1.1

var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];

//Iteration1.2


  function samples () {
  return _.sample(opinions);
  }


//Iteration1.3

function collection (){
  return _.times(10, samples);
}

//Iteration1.4
function employeeSatisfaction (){
  return _.times(5, collection);
}

console.log(employeeSatisfaction());
