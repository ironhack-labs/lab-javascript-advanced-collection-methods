var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function randomSelect(array) {
  return _.sample(array)
}


function construct(array) {
  // pushes a random item from 'array' 10 times, returns the constructued array
  var constructedArray = []
  for (var i = 0; i < 10; i++) {
    constructedArray.push(randomSelect(array))
  }
  return constructedArray
}


function constructDepartment(array) {
  var constructedDep = []
  for (var i = 0; i < 5; i++) {
    constructedDep.push(construct(array))
  }
  return constructedDep
}

console.log(constructDepartment(opinions))


// Iteration 2

function array2D (array) {
  return _.chunk(array,2)
}

//console.log(array2D(birthdays))

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

function completeBday(array,moreBirthdays) {
  return _.concat(array2D(array), array2D(moreBirthdays))
}

console.log(completeBday(birthdays,moreBirthdays));;


// Iteration 3
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  for (i=0; i<password.length;i++) {
  if (_.findIndex(i) !== _.findLastIndex(i)) {
    return "Read the intructions again dummy!"
    }
  }
  return "Success"
}
console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

console.log(_.findIndex(goodPsswd.split(''), function(o) {
  return o === "2"
}))
