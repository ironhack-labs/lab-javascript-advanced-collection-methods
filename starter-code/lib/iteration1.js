var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function randomOpinion(){
  return _.sample(opinions);
}
//Part 1
console.log("Part 1 ", randomOpinion());

//Part 2 & 3
var survey = [];
survey.push(_.times(10, randomOpinion ));

//Part 4
var employeesSatisfaction = function(){
  return _.times(5, function(){
      return _.times(10, randomOpinion);
  });
}

//Part 5
console.table(employeesSatisfaction());
