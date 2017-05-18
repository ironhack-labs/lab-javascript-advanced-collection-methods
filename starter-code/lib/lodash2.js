
var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
 var Unico = _.uniq(password);
 if (Unico.lenght === password.lenght){
   console.log("Good");}
 else {
   console.log("Bad");
}};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
