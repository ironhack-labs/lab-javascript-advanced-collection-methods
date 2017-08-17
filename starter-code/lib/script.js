// Survey exercise

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function randomOpinion(array) {
  return _.sample(array);
}

function tenTimes(array) {
  var arrayOfOpinions = _.times(10, function(){
    return randomOpinion(array);
  });
  return arrayOfOpinions;
}

function moreFiveTimes(array) {
  var arrayOfOpinions = _.times(5, function() {
    return tenTimes(array);
  });
  return arrayOfOpinions;
}

var generatedOpinions;
generatedOpinions = moreFiveTimes(opinions);

console.log(generatedOpinions);

// Password exercise

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  for (var i = password.length - 1; i >= 0; i--) {
    if (password.indexOf(password[i]) !== i) {
      return "Error! The password can not contain repeated elements.";
    }
  }
  return "The password is correct";
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
  for (var i = 0; i < password.length; i++) {
    if (isNaN(_.toNumber(password[i]))) {
      return "Error! The password only can contains numbers.";
    }
  }
  return "The password is correct";
};
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  return password.substring(0, 10);
};
trimPassword(badPsswd);
