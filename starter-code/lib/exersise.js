var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];

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

function finalResponses(array) {
  for (var i = 0; i < arrayDepartmentResponses(array).length; i++) {
    for (var j = 0; j < arrayDepartmentResponses(array)[i].length; j++) {
      console.log('Department' + ' ' + [i + 1] + ':' + ' ' + arrayDepartmentResponses(array)[i][j]);
    }
  }
}

var employeeSatisfaction = function(array) {
  for (var i = 0; i < arrayDepartmentResponses(array).length; i++) {
    for (var j = 0; j < arrayDepartmentResponses(array)[i].length; j++) {
      console.log('Department' + ' ' + [i + 1] + ':' + ' ' + arrayDepartmentResponses(array)[i][j]);
    }
  }
};

employeeSatisfaction(responses);
