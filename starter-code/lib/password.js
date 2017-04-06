// UNIQUE CHARACTER PASSWORD

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  var pass = _.split(password, '');
  var uniqueCharPass = _.uniq(pass);
  if (pass.toString() !== uniqueCharPass.toString()) {
    console.log("ALERT");
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);


// ANY NON-NUMBER PASSWORD

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
console.log(Number(badPsswd));
var onlyNumbers = function (password) {
  var numberedPassword = Number(password);
  var numberpass = _.isFinite(numberedPassword);
  console.log(numberpass);
  if (numberpass === false) {
    console.log("It is not a number");
  }
};
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);


// 10 DIGIT PASSWORD

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  var arrayPass = _.split(password, '', 10);
  console.log(arrayPass.join(""));
};

trimPassword(badPsswd);
