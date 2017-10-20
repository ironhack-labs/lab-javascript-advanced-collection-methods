// 1. Create an array that matches these opinions.

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

// 2. Create a function that randomly picks up one of these items in the opinions array.

function randomOpinion (array) {
  return array[Math.floor(Math.random() * array.length)];
}
    console.log(randomOpinion(opinions));

// 3. Create a function that pushes the item into the array. You will need to repeat this procedure ten times to create an array of 10 opinions.


function generatorOpinion (num) {
  var tempArray = [];
  for (var i = 0; i < num; i++ ) {
    tempArray.push(randomOpinion(opinions));
  }
  return tempArray;
}

var coworkersOpinions = generatorOpinion(10);
console.log (coworkersOpinions);

random5();

// Create another function that pushes the 10-items-array into another array. You will need to do this five times to create the five departments. At the end you will have something like the function below:

function random5(){
  var mathDepart = generatorOpinion(10);
 var hrDepart = generatorOpinion(10);
  var scienceDepart = generatorOpinion(10);
  var healthDepart = generatorOpinion(10);
  var eduDepart = generatorOpinion(10);





    // var departments = [mathDepart: [opinions], hrDepart: [opinions], scienceDepart: [opinions], healthDepart: [opinions], eduDepart: [opinions]];

    var departments = [];

    departments.push(mathDepart);
    departments.push(hrDepart);
    departments.push(scienceDepart);
    departments.push(healthDepart);
    departments.push(eduDepart);
    console.log(departments);
}
