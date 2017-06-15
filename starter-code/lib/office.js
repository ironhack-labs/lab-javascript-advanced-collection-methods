var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var newArray = [];

function buildMatrix () {
  newArray.push(_.sample(opinions));
  return newArray
}

function createOpinions () {
  return _.times(10, buildMatrix)
}

var employeeSatisfaction = function () {
  // Steps 2, 3 and 4 here
  _.times(5, createOpinions)

  return newArray;
};

console.log(newArray)
