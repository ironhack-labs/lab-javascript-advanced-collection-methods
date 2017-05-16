var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

// Create a function that randomly picks up one of these items in the opinions array

// function randomOpinion() {
//   var randomNum = Math.floor(Math.random() * opinions.length);
//   console.log("randomNum",randomNum);
//   pushRandomOpinion(randomNum);
// }
//
// // randomOpinion();
//
// function pushRandomOpinion(randomValue) {
//   opinionsArray.push(opinions[randomValue]);
//   console.log("opinionsArray",opinionsArray);
// }
//
//
//
// _.times(10, randomOpinion());
// console.log("opinionsArraycompleted",opinionsArray);

// Second point with Lodash
// Create a function that pushes the item into the array. You will need to repeat this procedure ten times to create an array of 10 opinions.

var newArray = [];
newArray.push(_.times(10, function() {
  return _.sample([ "This is the best job ever",
                   "Satisfied",
                   "At least I get paid",
                   "I'm looking for another job",
                   "I don't want to answer"])
}));

console.log(newArray);

// Create another function that pushes the 10-items-array into another array. You will need to do this five times to create the five departments. At the end you will have something like the function below:

var departmentArray = [];
departmentArray.push(_.times(5, function() {
  return newArray;
}));
console.log(departmentArray);
