//Iteración 3
//Ejercicio 1
var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
   //your code goes here
  var passWithUniqChars = _.uniq(password)

  var uniqueString = _.join(passWithUniqChars, '');

  if (uniqueString === password) {
    console.log("the password is correct")
  } else {
    console.log("the password is not correct")
  }
}
noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

//Ejercicio 2
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {

    var correct = true
    _.map(password, function(char, index) {

      if (_.isNaN(_.toNumber(char))) {
        correct = false;
      }
    })

    if (correct) {
      console.log("the password is correct")
    } else {
      console.log("the password is not correct")
    }

}
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);

//Ejercicio 3
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 //your code goes here
  var trimedPassword = _.reject(password, function(o, index) { return index < 9 }).join('');
  console.log(trimedPassword)
}
trimPassword(badPsswd);
