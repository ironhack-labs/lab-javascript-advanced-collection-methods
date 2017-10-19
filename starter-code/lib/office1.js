//Iteration1 Office

var _ = require('lodash');

//Iteration1.1

var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];

//Iteration1.2

var x = _.random([lower = 0], [upper = 4]);



console.log(opinions)

//Iteration1.3

var array = opinions;

function addItem() {
  array.push(array[x]);
}

for (i = 0; i < 5; i++) {
  addItem(i)
}

console.log(opinions)
