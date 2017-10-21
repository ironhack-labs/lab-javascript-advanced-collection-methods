var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  var arrayPassword = goodPsswd.split('');

    console.log(arrayPassword);

    arrayPassword.filter(function( item, i, ar){
      return ar.indexOf( item ) === i;
    }).join('');
};

noRepeatChar(goodPsswd);
// "Good password."

noRepeatChar(badPsswd);
// "Ouch, bad password."
