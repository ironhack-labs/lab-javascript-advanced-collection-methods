var _ = require('lodash');

//noRepeatChar Implementation
var goodPsswd = "1234567890";
var badPsswd = "1123456";

function noRepeatChar(p) {
  var evalPsw = _.uniq(p).length !== p.length;
  if (evalPsw) {
    return "quietooor!!.. eese peaso de parrworrr de la pradera ase muucha pupita";
  } else {
    return true;
  }
}

//Results
var good = noRepeatChar(goodPsswd);
var bad = noRepeatChar(badPsswd);
console.log(" noRepeatChar Results: ");
console.log("goodPsswd: " + good);
console.log("badPsswd: " + bad + "\n");

//onlyNumbers Implementation
goodPsswd = "1234567890";
badPsswd = "1a234567890";

function onlyNumbers(p) {
  var num = _.toNumber(p);
  if (_.isNaN(num)) {
    return "ERROR";
  } else return true;
}

//Results
good = onlyNumbers(goodPsswd);
bad = onlyNumbers(badPsswd);
console.log(" onlyNumbers Results: ");
console.log("goodPsswd: " + good);
console.log("badPsswd: " + bad + "\n");

//trimPassword Implementation
goodPsswd = "1234567890";
badPsswd = "12345678901234567890";

function trimPassword(p) {
  if (_.size(p) > 10) {
    return _.slice(p, 9, p.length);
  } else {
    return p;
  }
}

//Results
good = trimPassword(goodPsswd);
bad = trimPassword(badPsswd);
console.log(" trimPassword Results: ");
console.log("goodPsswd: " + good);
console.log("badPsswd: " + bad);
