//Ejercicio 1 ---- Opiniones.

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function getOpinion() {
 return _.sample(opinions);
}

var getDepartmentOpinion = function (){
 return _.times(10, getOpinion);
};

var getCompanySatisfaction = function () {
 return _.times(5, getDepartmentOpinion);
};

console.log(getCompanySatisfaction());

//Ejercicio 3 ---- Passwords.

//1.)
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  return _.uniq(password).length < password.length ? false : true; //your code goes here
};

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

//2.)
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (pass) {
 return _.whitout(pass(0-9)).length ;  //your code goes here
};
console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));

//3.)
