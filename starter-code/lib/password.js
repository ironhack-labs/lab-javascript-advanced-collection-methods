//var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  var passUniqueLength = _.uniq(password).length;
  return (passUniqueLength !== password.length);

};

console.log("The password has repeated characters? " + noRepeatChar(goodPsswd));
console.log("The password has repeated characters? " + noRepeatChar(badPsswd));

/*
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (pass) {
  pass.split(',').map(function(i){
    console.log(parseInt(i));


});
};
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);
*/
