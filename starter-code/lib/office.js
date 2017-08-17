var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];

//Create a function that randomly picks up one of these items in the opinions array.
function opRandom (a) {
  return _.sample(a);
}
//console.log(opRandom(opinions));

function opDepartment (b) {
  var arrDepartment = [];
  for (var i = 0; i < 10; i++) {
    var x = opRandom(b);
    arrDepartment.push(x);
  }
  return arrDepartment;
}
console.log(opDepartment(opinions));
