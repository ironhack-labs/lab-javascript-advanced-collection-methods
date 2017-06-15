var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];
var sampleOpinions = "a";

function functionName() {
  sampleOpinions = _.sample(opinions);
  return sampleOpinions;

}

var arrayName = [];

function createArrayName() {
  arrayName.push(_.times(10, functionName));
  return arrayName;
}

var employerOpinions = [];

function employerSatisfaction() {
  employerOpinions.push(_.times(5, createArrayName));
}
employerSatisfaction();
console.log(employerOpinions);
