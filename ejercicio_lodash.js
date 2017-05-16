//1.1 Create an array that matches these opinions.

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
/*
var randomOpinion = _.sample(opinions);

console.log(randomOpinion);

//1.2 Create a function that randomly picks up one of these items in the opinions array.

function randomPick (opinions){
  var newOpinion = _.sample(opinions);
  return newOpinion;
}

console.log(randomPick (opinions));

//1.3 Create a function that pushes the item into the array. You will need to repeat this procedure ten times to create an array of 10 opinions.
SOLUCION DE JORDI:
function getRandom(opinions){
    return _.sample(opinions);
}

var newArray = _.times(10, function(){ return randomPick(opinions)});

console.log(newArray);
*/

//1.4. Create another function that pushes the 10-items-array into another array

var employeeSatisfaction = function () {
  function randomPick (opinions){
    var newOpinion = _.sample(opinions);
    return newOpinion;
  }

  var newArray = _.times(10, function(){ return randomPick(opinions)});

  var opinionDepartments = _.times(5, function(){return newArray});

  return opinionDepartments;
};

console.log (employeeSatisfaction);
