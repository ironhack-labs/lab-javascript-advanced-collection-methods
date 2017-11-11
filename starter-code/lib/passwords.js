var goodPsswd = "1234567890";
var badPsswd = "1123456";
function noRepeatChar(string){
  var answer = false;

  string.split("").forEach(function(char, index){
    if(string.indexOf(char)!== index){
      answer = "Ouch, bad password";
    }else{
      answer = "Good password";}
  });
  return console.log(answer);
}


 //your code goes he

noRepeatChar(goodPsswd);
// "Good password."

noRepeatChar(badPsswd);
// "Ouch, bad password."
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function () {
  var answer = false;

  string.split("").forEach(function(char){
    if (string.match(/[a-z]/i)){
      answer = "Ouch, bad password";
    }else{
      answer = "Good password";}
  });
  return console.log(answer);//your code goes here
};

onlyNumbers(goodPsswd);
// "Good password."

onlyNumbers(badPsswd);
// "Ouch, bad password."
