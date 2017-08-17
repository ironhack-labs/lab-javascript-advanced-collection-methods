var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  if(_.uniq(password).length === password.length){
    console.log("es la correcta")
  } else {
    console.log("error");
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function (password) {
 for(var i = 0; i < password.length; i++){
   if(_.isNaN(parseInt(password[i]))){
     console.log("Error");
     return;
   }
 }
 console.log("No hay error");
}


onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  var string = _.take(password, 10).join("");

  return string

}
