var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";

// Different characters
function noRepeatChar(password) {
  var check = _.uniq(password);
  if(check.length < password.length ){
    console.log('error');
  }
  else{
    console.log('guay');
  }
}

noRepeatChar(badPsswd);

// Only numbers
function onlyNumbers(password){
  _.parseInt(password);
  for(var i=0; i<password.length; i++){
    _.isNumber(password);
  }
}

onlyNumbers(badPsswd);

// Trim
var badPsswd = "11234a56123134afafs";
function trim(password){
  if(password.length > 10){
    password = password.substr(0,9);
    console.log('trimmed to: ' + password);
  }
}

trim(badPsswd);
