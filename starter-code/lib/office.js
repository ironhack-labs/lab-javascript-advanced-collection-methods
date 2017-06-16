var opinions = ["This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];

employeeSatisfaction = function() {
  return _.sample(opinions);
};

function pushTenRandomPosition() {
  return _.times(10, employeeSatisfaction);
}

var result = function pushFiveRandomPosition() {
  return _.times(5, pushTenRandomPosition);
};

console.log(result());
///////2////////
function organizedBday() {
  return _.chunk(birthdays, 2);
}

function missingBday() {
  var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                       "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

  return _.chunk(moreBirthdays, 2);
}

console.log(_.concat(organizedBday(), missingBday()));
/////3/////
/*var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  var result = _.uniq(password);
  return result.length === password.length;
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);*/
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function(password) {
  var uniqPassword = _.uniq(password);
  console.log(uniqPassword);
  var stringPassword = _.join(uniqPassword, "");
  if (stringPassword === password) {
    console.log("Contraseña aceptada, puede continuar");
  } else {
    console.log("La contraseña introducida no es correcta");
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
