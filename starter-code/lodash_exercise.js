/*Opinions*/

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function randomOpinion(opinions) {
  return _.sample(opinions);
};

function departmentOpinions(array){
  return _.times(10, function(){
    return randomOpinion(array);
  });
};

function companyOpinions(array){
  return _.times(5, function(){
    return departmentOpinions(array);
  })
}

console.log('****Below are the company answers.****')
console.log(companyOpinions(opinions));
console.log('****Company answers end here.****')


/* Password problems */
var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  if (_.uniq(password).length !== password.length) {
    console.log("Password not unique.");
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
  var x = new Number(password);
  if(_.isNaN(x)) {
    console.log('Not a number.');
  }
}
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);


var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  console.log(password.slice(10));
}

trimPassword(badPsswd);
