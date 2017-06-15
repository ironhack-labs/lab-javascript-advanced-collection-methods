var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  var passArray = _.chunk(password);
  var passFlatten = _.flatten(passArray);
  var passUniqueLength = _.uniq(passFlatten).length;
  if (passUniqueLength === passFlatten.length){
    return "Password ok";
  }else{
    return "Not ok";
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
