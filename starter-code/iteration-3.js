
var goodPsswd = "";
var badPsswd = "1234567890123";


function noRepeatChar(password) {

  var uniqued = _.uniq(password);
  var uniquedJoined = _.join(uniqued, '');

  return uniquedJoined === password;

}

function onlyNumbers(password) {
  //If we put a return on filter method not will end
  //So we have a "dity" solution with the error variable.
  var allNumbers = "0123456789";
  var error = "";

  _.filter(password, function(char) {

    if(!_.includes(allNumbers, char)){

      error = "Has something that is not a number";

    }
  });

  if (error === "") {

    error = "Has only numbers";

  }

  return error;

}

function trimPassword(password) {

  var truncated = _.truncate(password, {
    'length': 10,
    'omission': ''
  });

  return truncated;

}



console.log(onlyNumbers(badPsswd));
console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));
console.log(trimPassword(badPsswd));
