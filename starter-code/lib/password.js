var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 return password === _.uniq(password).join('');
};

console.log("Not repeated characters in ", goodPsswd, " is " , noRepeatChar(goodPsswd));
console.log("Not repeated characters in ", badPsswd, " is " , noRepeatChar(badPsswd));


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 return _.without(password, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9).length === 0;
};
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);
console.log("Only number with ", goodPsswd , " is ",onlyNumbers(goodPsswd));
console.log("Only number with ", badPsswd , " is ",onlyNumbers(badPsswd));
