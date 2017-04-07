var _ = require('lodash');



var goodPsswd = "1234567890";
var badPsswd = "1123456";

function noRepeatChar(password){
 return _.uniq(password).length == password.length;

}


/* old solution, didn't know about _.uniq
function noRepeatChar(password){
 for(var i = 0; i < password.length; i++){
   if(password.indexOf(password[i]) != password.lastIndexOf(password[i])) return false;
 }
 return true;

}
*/

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));



var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 //your code goes here
 var pwd = password.split("");
 pwd = pwd.reduce(function(a, b){
   return a * b;
 }, 1);
 return !isNaN(pwd);

};

console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));


var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 //your code goes here
 return password.slice(0, 10);
};
console.log(trimPassword(badPsswd));
