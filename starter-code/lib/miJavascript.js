var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];
//var people = [][];
function randomResponse(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function arrayResponses(array) {
  var tenResponses = [];
  for (var i = 0; i < 10; i++) {
    tenResponses.push(randomResponse(array));
  }
  return tenResponses;
}

function arrayDepartmentResponses(array) {
  var fiftyResponses = [];
  for (var j = 0; j < 5; j++) {
    fiftyResponses.push(arrayResponses(array));
  }
  return fiftyResponses;
}

/*function beautifyArray(array){
  var finalArray = fiftyResponses.forEach(function(element) {
    return fiftyResponses[element];
  });
  return finalArray;
}*/

var employeeSatisfaction = function () {
  // Steps 2, 3 and 4 here
  var array = arrayDepartmentResponses(responses);
  return array;
};

console.log(employeeSatisfaction);
