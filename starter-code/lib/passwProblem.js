//Iteration 3 - The Password Problem//

//---------Unique characters------------//

var goodPsswd = "985471263";
var badPsswd = "1524515815";


var noRepeatChar = function (password) {
  orderedPass = password.split('').sort(function(a,b){
    return a-b;
  });
  var array = [];
  for (var i = 0; i <= orderedPass.length - 1; i++) {
    if (orderedPass[i] == orderedPass[i + 1]) {
        array.push(orderedPass[i]);
    }
  }  
  if(array.length === 0) {console.log('Good password')}  
  else {console.log('Ouch, bad password')}  
};

noRepeatChar(goodPsswd);
// "Good password."

noRepeatChar(badPsswd);
// "Ouch, bad password."


//---------Only numbers------------//

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";



var onlyNumbers = function (password) {
  if (password.match(/\D/) === null) {
    console.log("Good password.")
  } else console.log("Ouch, bad password.")
}

onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

//---------Ten digits only------------//


var goodPsswd3 = "1234567890";
var badPsswd3 = "12345678901234567890";

var trimPassword = function (password) {
  if (password.length>10) {
   return password.substring(0,10); 
  }
  else {
    return password;
  }
};

password = trimPassword(badPsswd3);

console.log(password);
// "1234567890"
