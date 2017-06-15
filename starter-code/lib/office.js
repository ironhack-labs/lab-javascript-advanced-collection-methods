var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function pickUpRandomOpinion() {
  return  _.sample(opinions);
}

function pushRandomOpinions() {
  return _.times(10, pickUpRandomOpinion );
}

function employeeSatisfaction() {
  return _.times(5,pushRandomOpinions);
}

console.log(employeeSatisfaction(opinions));
