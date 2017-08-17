var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 //your code goes here
 var newArray = _.uniq(password);
 //console.log(newArray)

 if(newArray.length === password.length){
   console.log(password+": There's no error!");
 }else{
   console.log(password+": Error!");
 }

};
console.log("Different characters:");
noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

//console.log(goodPsswd[0])

//IT2
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function (password) {
 //your code goes here
 for(var i=0; i<password.length; i++){
   if(_.isNaN(parseInt(password[i]))){
     console.log(password+": Error");
     return;
   }
 }
 console.log(password+": There's no error");
};
console.log("\nOnly numbers:");
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

//IT3
var goodPsswd = "1234567890";
var badPsswd = "2309898433423423";
var trimPassword = function (password) {
 //your code goes here
 var a = _.take(password, 10).join('');
 return a;
};
trimPassword(badPsswd);

console.log("\nTen only digits:");
console.log(trimPassword(goodPsswd));
console.log(trimPassword(badPsswd));
