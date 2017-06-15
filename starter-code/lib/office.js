var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


function buildMatrix () {
  return _.sample(opinions);
}

function createOpinions () {
   return _.times(10, buildMatrix)
}

var employeeSatisfaction = function () {
  // Steps 2, 3 and 4 here
  return _.times(5, createOpinions)
};

var employeeSatisfactions = employeeSatisfaction()
console.log(employeeSatisfactions)
