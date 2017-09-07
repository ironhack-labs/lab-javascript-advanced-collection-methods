// Exercise 1


var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


function randomizeArray(array){
var arrayRandom = [];

for (var i = 0; i < 10; i++) {
  arrayRandom[i] = _.sample(array);
}
return arrayRandom;
}

var employeeSatisfaction = function () {
  var array = [];
  for(var i = 0; i < 5; i++) {
    array.push(randomizeArray(opinions));
  }
  console.log(array);
  return array;
};



// Exercise 2
