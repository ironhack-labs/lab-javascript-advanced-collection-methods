var goodPsswd = "1234567890";
var badPsswd = "112354556";
var noRepeatChar = function (password) {

var newPass = password.split("");
var texto = "Good password.";
console.log(newPass);
 //your code goes here
newPass.sort();
newPass.sort(function(a,b){

    if(a-b===0)
    {
      texto = "Ouch, bad password.";
    }
    
    
});
return console.log(texto);
};

noRepeatChar(goodPsswd);
// "Good password."

noRepeatChar(badPsswd);
// "Ouch, bad password."

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 //your code goes here
var newPass = password.split("");
var newArray = newPass.filter(function(element){
   var numbers = ['0','1','2','3','4','5','6','7','8','9'];
   if(numbers.indexOf(element)==-1){
     return false;
   } else return true;
});
if(newArray.length < newPass.length)
{
  return console.log("Ouch, bad password.");
} else return console.log("Good password.");
};

onlyNumbers(goodPsswd);
// "Good password."

onlyNumbers(badPsswd);
// "Ouch, bad password."

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
var newPass = password.split("");
var shortPass = newPass.filter(function(element,index){
    if(index>9){
      return false;
    }else return true;
});

return shortPass;
 //your code goes here
};
trimPassword(badPsswd);
// "1234567890"