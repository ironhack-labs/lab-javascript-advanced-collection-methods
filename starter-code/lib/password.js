var goodPsswd = "1234567890";
var badPsswd = "1123456";

//EJ_1
function noRepeatChar(password) {
  var ok = "Error";
  if(_.uniq(password).length == password.length) {
    ok = "OK"
  }
  return ok;
}

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

//EJ_2
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

function onlyNumbers(pass) {
  var password = _.toNumber(pass);
  var result = "OK";
  if(_.isNaN(password)) {
    result = "Error";
  }
  return result;
}

console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));

//EJ-3
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

function trimPassword(password) {
  var correctPass = password;
  if (password.length > 10) {
    var x = _.slice(password, 0, 10);
    correctPass = _.join(x, '');
  }
  return correctPass;
}

console.log(trimPassword(badPsswd));
