
// Different characters
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 return password === _.uniq(password).join('');
};

console.log("Not repeated characters in ", goodPsswd, " is " , noRepeatChar(goodPsswd));
console.log("Not repeated characters in ", badPsswd, " is " , noRepeatChar(badPsswd));

// Only numbers
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 return _.isFinite(_.toNumber(password));
};
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);
console.log("Only number with ", goodPsswd , " is ",onlyNumbers(goodPsswd));
console.log("Only number with ", badPsswd , " is ",onlyNumbers(badPsswd));

// Ten digits onlyN
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  return _.truncate(password, {
    'length': 10,
    'omission': ''
  });
};

console.log("Trim ", badPsswd, " to 10 chars",trimPassword(badPsswd));
