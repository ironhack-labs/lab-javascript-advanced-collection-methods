var opinions = [ "This is the best job ever",
                  "Satisfied",
                  "At least I get paid",
                  "I'm looking for another job",
                  "I don't want to answer"];

function grabOpinion (){
  return _.sample(opinions);
}
grabOpinion();

function generateEmployeesOpinion () {
var employeesOpinions = _.times(10, grabOpinion);
return employeesOpinions;
};

var departmentsOpinions = _.times(5, generateEmployeesOpinion)
console.log(departmentsOpinions)


// /////////////PASSWORD//////////////

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  var i = 0;
  var comprobacion = _.times(password.length-1, function(){
    i++
    var subString = password[i-1];
    return password.substring(i).includes(password[i-1]) ? "incorrect" : "correct";
  });
  if (_.includes(comprobacion, 'incorrect')) {
    console.log("El password: "+password+" no es valido");
  } else {
    console.log("El password: "+password+" es valido");
  };
  };

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 var comprobacion = _.times(password.length-1, function(){
   return password.match(/[a-z]/g) ? "incorrect" : "correct";
 })
 if (_.includes(comprobacion, 'incorrect')) {
   console.log("El password: "+password+" no es valido");
 } else {
   console.log("El password: "+password+" es valido");
 };
}
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);
