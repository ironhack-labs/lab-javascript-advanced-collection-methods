var goodPsswd = "1234567890";
var badPsswd = "1234567890";
var noRepeatChar = function (password) {
  var uniquepass = _.uniq(password);
  if(uniquepass.length != badPsswd.length){
  console.log("error");}
  else{
    console.log("come in");
  }
 };

noRepeatChar(goodPsswd);

var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1ad34567890";
var onlyNumbers = function (num) {
  var check = _.isNaN(num);
  console.log(check);
  if (check === false) {
    console.log ("error");
  }
  else{
    console.log('esta correcto');
  }
};
onlyNumbers(goodPsswd);
//onlyNumbers(badPsswd);
