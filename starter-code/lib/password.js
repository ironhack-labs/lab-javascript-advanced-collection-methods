


var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function(password) {
  var noRepeated = _.uniq(password);
  if (noRepeated.length == password.length){
    console.log("Your password is ok");
  } else{
    console.log("Your password has duplicates");
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);



var goodPsswd = "66634567890";
var badPsswd = "1a234567890";

var onlyNumbers = function (password) {
  var result = "Your password is full of numbers, good job.";
  for (var i = 0; i < password.length; i++) {
    if (isNaN(parseInt(password[i]))){
      result = "ALERT, only numbers allowed!";
    }
  }
  return result;
};

console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));




var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

function sliceLastChar(string){
  var result = _.slice(string,0,10);
  return result;
}


var trimPassword = function (password){
  var newPassword;
  if (password.length > 10){
    newPassword = _.join((sliceLastChar(password)), "");
  } else{
    return password;
  }
  return newPassword;
};

console.log(trimPassword(badPsswd));


















///
