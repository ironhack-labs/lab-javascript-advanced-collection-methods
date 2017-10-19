var _ = require('lodash');

//var goodPsswd = "1234567890";
//var badPsswd = "1123456";
var passwd = prompt();

var noRepeatChar = function (x) {
  var array = [];
  for ( var i =0; i < x.length; i++){
    array[i]=x.substr(i,1);
  }
return array;
};


//noRepeatChar(goodPsswd);
//noRepeatChar(badPsswd);

var evaluation = _.uniq(noRepeatChar(passwd));
console.log(passwd);
console.log(evaluation);
if(evaluation.length != passwd.length){
  console.log("error, repeated number");
}
else{
  console.log("no-repeated number");
}

//////////////////////////////////////////////

function checkOnlyNumbers(x) {

  passwd2 = parseInt(passwd);

    console.log(passwd2);

  if(x.length != passwd2.toString().length){
    console.log("Error! Pass not allow characters");
  }else{
    console.log("Pass correct");
  }
}

checkOnlyNumbers(noRepeatChar(passwd));
////////////////////////////////////////////////
var digitos10 = "";
var trimPassword = function (x) {
  for(i = 0; i < 10; i++){
        digitos10 = digitos10 + x[i];
  }
  return digitos10;
};
trimPassword(noRepeatChar(passwd));

console.log(digitos10);
