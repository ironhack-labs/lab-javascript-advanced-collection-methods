// Iteration 1 - The Office
// 1. Create an array that matches these opinions.

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

// 2. Create a function that randomly picks up one of these items in the opinions array.

function randomOpinion(array) {
  //return array[Math.floor(Math.random() * array.length)];
  return _.sample(array);
}

    //console.log(randomOpinion(opinions));

// 3. Create a function that pushes the item into the array. You will need to repeat this procedure ten times to create an array of 10 opinions.
function generatorOpinion(num) {
  var tempArray = [];
  for (var i = 0; i < num; i++ ) {
    tempArray.push(randomOpinion(opinions));
  }
  return tempArray;
}

var coworkersOpinions = generatorOpinion(10);

//console.log(coworkersOpinions);

// 4. Create another function that pushes the 10-items-array into another array. You will need to do this five times to create the five departments. At the end you will have something like the function below:

function officeOpinionsGenerator (nbDepartments) {
  var workingArray = [];
  _.times(nbDepartments, function (n){
    workingArray.push(generatorOpinion(10));
  });
  return workingArray;
}

var collectionOfOpinions = officeOpinionsGenerator(5);

//console.log(collectionOfOpinions);


// Iteration 2 -- Harry Potter's Birthdays
// 1. Create a function that receives an array and returns an array of two dimensions. Each internal array should have the name of one character and his date of birthday.
function generateXDimensionalArray(array, dimension) {
    return _.chunk(array, dimension);
}

var _birthdays = generateXDimensionalArray(birthdays, 2);

//console.log(_birthdays);

//2. Now that we have our two-dimensions array, we notice that some of the birthdays are missing. But we found another array with birthdays from the book.
var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];


//3. Create a function that add this array above to the first one you manipulated with the same format. The function should return an array with all the birthdays in pairs.

function addArrayToArray(arrayToAdd, sourceArray) {
  var workingArray = [];
  workingArray = generateXDimensionalArray(arrayToAdd,2);
  workingArray.forEach(function(pair) {
      sourceArray.push(pair);
  });
  return sourceArray;
}
var completeBirthdays = addArrayToArray(moreBirthdays, _birthdays);

//console.log(completeBirthdays);

//Iteration 3 - The Password Problem
//1. Different characters: create a function that receives a password and returns an error if every char in the password is not unique.
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  if (password.length !== _.uniq(password).length) {
    console.log("Your password has duplicates!");
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

//2. Only numbers: Create a function that receives a password and returns an error if the password has any character different than numbers.
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function () {
 //your code goes here
};
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);
