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