var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  var noDuplicates = _.uniq(password);
  if(password.length !== noDuplicates.length){
    console.log("Duplitates found");
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);var _ = require('lodash');

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  var noDuplicates = _.uniq(password);
  if(password.length !== noDuplicates.length){
    console.log("Duplitates found");
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
