var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  if (_.uniq(password).length != password.length) return "No repitas caracteres alma de cántaro!";
  else return "Password OK";
};

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 if (password.match(/[a-zA-Z]/)) return "En serio? No distingues letras de números?!";
 else return "Password OK";
};
console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  return _.join(_.slice(password, 0, 10), "");
};
console.log(trimPassword(goodPsswd));
console.log(trimPassword(badPsswd));
