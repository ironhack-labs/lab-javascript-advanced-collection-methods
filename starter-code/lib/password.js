var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 var a = password.split('');
 var b = _.uniq(a);
 if(a.length !== b.length){
   return false;
 }
 else{
   return true;
 }
};

noRepeatChar(badPsswd);


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function (password) {
  var a = parseInt(password);
  var b = a.toString();
  if(b.length===password.length){
    return true;
  }
  else{
    return false;
  }
}

onlyNumbers(badPsswd)


/*
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password {
 var firsTen = _.truncate(password,{
   'length':10});
 return firsTen;
}
trimPassword(badPsswd);
*/
