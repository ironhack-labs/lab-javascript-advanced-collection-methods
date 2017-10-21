var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  var flag = true;
  for (var i = 0; i < password.length; i++) {
    for (var j = i + 1; j < password.length; j++) {
      if (password[j] === password[i]) {
        flag = false;
      }
    }
  }
  return flag;
};
noRepeatChar(goodPsswd);
// "Good password."
noRepeatChar(badPsswd);
// "Ouch, bad password."

function passCheck(pass1, pass2){
  if (pass1 === true) {
    console.log("Good password.");
  }
  else {
    console.log("Ouch, bad password.");
  }
  if (pass2 === true) {
    console.log("Good password.");
  }
  else {
    console.log("Ouch, bad password.");
  }

}
passCheck(noRepeatChar(goodPsswd),noRepeatChar(badPsswd));

goodPsswd = "1234567890";
badPsswd = "1a234567890";


var onlyNumbers = function (password) {
  if(!isNaN(password)){
    return true;
  }else {
    return false;
  }
};

onlyNumbers(goodPsswd);
// "Good password."

onlyNumbers(badPsswd);
// "Ouch, bad password."

passCheck(onlyNumbers(goodPsswd),onlyNumbers(badPsswd));

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 if (password.length > 10) {
  password = password.slice(10 ,password.length -1);
 }
 return password;
};
console.log(trimPassword(badPsswd));

// "1234567890"
