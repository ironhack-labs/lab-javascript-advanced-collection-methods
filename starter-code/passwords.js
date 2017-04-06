var goodPsswd = "1234567890";
var badPsswd = "1123456";
// var arr = [];
//
// var noRepeatChar = function (password) {
//   arr = [];
//   for (var i = 0; i < password.length; i++) {
//     if (arr.includes(password[i])) {
//       return false;
//     } else {
//       arr.push(password[i]);
//     }
//   }
//   return true;
// };

var noRepeatChar = function (password) {
  var splitPass = _.split(password, "");
  var newPassword = _.uniq(splitPass);
  if (newPassword.length === splitPass.length) {
    return true;
  } else {
    return false;
  }
};

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
  var emptyArr = [];
  var splitPass = _.split(password, "");
  var justNumbers = _.without(splitPass, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  if (justNumbers.length === emptyArr.length) {
    return true;
  } else {
    return false;
  }
};
console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));


var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  var splitPass = _.split(password, "");
  var trimPassArr = _.slice(splitPass, 0, 10);
  var trimPass = _.join(trimPassArr, "");
  return trimPass;
};
console.log(trimPassword(badPsswd));
