/* Iteration 1: The Office */

var opinions = [
  "This is the best job ever",
   "Satisfied",
   "At least I get paid",
   "I'm looking for another job",
   "I don't want to answer"
 ];

function randomOpinion() {
  return opinions[Math.floor(Math.random() * opinions.length)];
}

function createOpinions() {
  var randomOpinions = [];
  for (var i = 0; i < 10; i++) {
    randomOpinions.push(randomOpinion());
  }
  return randomOpinions;
}

function createDepartments() {
  var departments = [];
  for (var i = 0; i < 5; i++) {
    departments.push(createOpinions());
  }
  return departments;
}

console.log(createDepartments());

/** Iteration 2: Harry Potters Birthday **/


  // var organizedBirthdays = [];
  // birthdays.forEach(function(element, index) {
  //   organizedBirthdays.push()
  // });

// function birthdaySort (array) {
//   var sortedBday = []
//   for (var i=0;  i<array.length; i++) {
//     sortedBday.push([array[i], array[i+1]]);
//   }
//   return sortedBday
//
//  }
//
// console.log(birthdaySort(birthdays));


function birthdaySort (dates) {
  var sortedBirthday = dates.reduce(function (accum, item, index, array){
    if (index%2===0) {
      array.push(item,item)//[index+1]);

    }
    return array;
  }, []);
  return sortedBirthday;
}

console.log(birthdaySort(birthdays));
