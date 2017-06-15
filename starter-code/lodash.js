var _ = require("lodash");

//ITERATION 1
var employeeSatisfaction = function () {
  function randomOpinions() {
    return _.sample(opinions);
  }

  function deptOpinions(){
   return _.times(10, randomOpinions);
 }
  var array = _.times(5, deptOpinions);

  return array;
};

console.log(employeeSatisfaction());


//ITERATION 2
function organizedBday() {
  return _.chunk(birthdays, 2);
}

function missingBday() {
  var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                       "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

  return _.chunk(moreBirthdays, 2);
}

console.log(_.concat(organizedBday(), missingBday()));

//ITERATION 3
var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  var result = _.chunk(password, password.length);
  var response = _.flatten(result);
  var s = _.uniq(response);
  if (s.length < response.length) {
    return "All characters must be different";
  } else {
    return "Good password";
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
