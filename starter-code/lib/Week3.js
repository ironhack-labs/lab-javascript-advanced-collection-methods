var responses = [
  'This is the best job ever!',
  'Satisfied.',
  'At least I get paid.',
  "I'm looking for another job.",
  "I don't want to answer.",
];

// funcion random respuesta aleatoria

function randomResponse() {
  var randomIndex = Math.floor(Math.random() * responses.length);

  return responses[randomIndex];
}

//Create a function that makes an array of 10 survey answers for one department. It should define an empty array and call the function from step 2 to add a randomly selected survey response into the empty array. You will need to repeat this procedure 10 times so that the array goes from empty to having 10 randomly selected survey answers.

function getResponse() {
  var randomRes = [];

  for (var i = 0; i < 10; i++) {
    randomRes[i] = randomResponse();
  }

  return randomRes;
}

//Create a third function that pushes makes the final array for the survey answers of all 5 of the departments. It should define an empty array and call the function from step 3 to add a 10-items department array into the empty array. You will need to repeat this procedure 5 times so that the array goes from empty to having 5 department survey answer arrays.

function responsesDepartment() {
  var dept = [];
  for (var i = 0; i < 5; i++) {
    dept[i] = getResponse();
  }
  return dept;
}

var total = responsesDepartment();

total.forEach(function(dept, deptNum) {
  dept.forEach(function(response) {
    console.log("Dep: " + deptNum + " - " + response);
  });
});
