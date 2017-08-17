var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 if(_.uniq(password).length == password.length){
   console.log("Good password");
 }
 else{console.log("Bad password");
 }
};


noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

function onlyNumbers (password) {
 if(_.isNaN(_.toNumber(password))){
   console.log("Bad password");
 }
 else{
   console.log("Good password")
 }
}
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);


var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

function trimPassword(password) {
 if(password.length>10){
   password = _.slice(password,0,10);
}
  return password.join('');
}
trimPassword(badPsswd);
