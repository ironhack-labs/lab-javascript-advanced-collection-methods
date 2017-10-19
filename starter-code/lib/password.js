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

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";


var onlyNumbers = function (str) {

  var strSplit = _.split(str, '');
  for(var i = 0; i < str.length; i++) {
    if(isNaN(strSplit[i])) {
      console.log("It is not a number");
      break;
    }
  }
};


onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

function trimPassword(str) {
  console.log(str.slice(0,9));
}

trimPassword(badPsswd);
