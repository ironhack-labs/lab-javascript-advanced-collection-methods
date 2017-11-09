var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  index = password.indexOf(0,password.length-1);
  if(index !== -1){
    console.log('Good password');
  }else{
    console.log('Ouch, bad password');
  }
};

noRepeatChar(goodPsswd);
// "Good password."

noRepeatChar(badPsswd);
// "Ouch, bad password."




var goodPsswd2 = "1234567890";
var badPsswd2 = "1a234567890";
var onlyNumbers = function (password) {
  if(!isNaN(password)){
    console.log('Good password');
  }else{
    console.log('Ouch, bad password');
  }
};

onlyNumbers(goodPsswd2);
// "Good password."

onlyNumbers(badPsswd2);
// "Ouch, bad password."




var goodPsswd3 = "1234567890";
var badPsswd3 = "12345678901234567890";
var trimPassword = function (password) {
  return password.substring(0,10);
};
trimPassword(badPsswd3);
// "1234567890"
