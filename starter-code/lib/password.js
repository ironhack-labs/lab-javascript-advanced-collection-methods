var goodPsswd = "1234567890";
var badPsswd = "1123456";

//console.log(_.difference(_.uniq(badPsswd), badPsswd));



var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function(password) {
  var uniqPassword = _.uniq(password);
  console.log(uniqPassword);
  var stringPassword = _.join(uniqPassword, "");
  if (stringPassword === password) {
    console.log("Contraseña Correcta");
  } else {
    console.log("Contraseña Incorrecta");
  }
};
noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

//noRepeatChar(goodPsswd);
//noRepeatChar(badPsswd);
