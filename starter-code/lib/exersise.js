//Iteration 1

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

//Iteration 2

function organizeBirthdays(array) {
  var birthdaysArray = [];

  array.reduce(function (previous, current, index) {
    if (index % 2 != 0) {
      birthdaysArray.push([previous, current]);
    }
    return current;
  }, '');
  return birthdaysArray;
}

var goodBirthdays = organizeBirthdays(birthdays);

console.log(goodBirthdays);

var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
                      "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];

var moreGoodBirthdays = organizeBirthdays(moreBirthdays);

console.log(moreGoodBirthdays);

var finalBirthdaysArray = [];

goodBirthdays.forEach(function(el) {
  finalBirthdaysArray.push(el);
});

moreGoodBirthdays.forEach(function(el) {
  finalBirthdaysArray.push(el);
});

console.log(finalBirthdaysArray);

//Iteration 3

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 
};

noRepeatChar(goodPsswd);


noRepeatChar(badPsswd);


//Iteration 4
