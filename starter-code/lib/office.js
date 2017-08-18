var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];

//Create a function that randomly picks up one of these items in the opinions array.
function opRandom() {
  //console.log("entro a opRandom");
  return _.sample(opinions);
}
//console.log(opRandom(opinions));

function opDepartment(b) {
  //console.log("entro a opDepartment");
  return _.times(10, opRandom);
}

//var result = opDepartment();
//console.log(result)

function employeeSatisfaction() {
  return _.times(5, opDepartment);
}

var result = employeeSatisfaction();
console.log(result);
