var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];

var arrayOpinions = [];
var arrayDepartments = [];

function pushingOpinions(array) {
  var randomString;
  for (var i = 0; i < 10; i++) {
    randomString = _.random(0, opinions.length - 1);
    array = _.concat(array, opinions[randomString]);
  }
  return array;
}


function pushingDepartments(x, y) {
  for (var i = 0; i < 5; i++) {
    var a = pushingOpinions(x);
    y.push(a);
  }
  return y;
}

pushingDepartments(arrayOpinions, arrayDepartments);
console.log(arrayDepartments);
