//Iteration 1
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var departments = [];
var results = [];

var pushOpinion = function(array){
  results.push(_.sample(array));
};

var pushResults = function(array){
  departments.push(array);
}

var employeeSatisfaction = function (opinions) {
   _.times(10, function(){pushOpinion(opinions)});
   _.times(5, function(){pushResults(results)});
   return departments;
};

console.log(employeeSatisfaction(opinions));

//Iteration 2
