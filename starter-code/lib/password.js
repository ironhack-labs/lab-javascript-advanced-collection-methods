var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 return password === _.uniq(password).join('');
};

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));
