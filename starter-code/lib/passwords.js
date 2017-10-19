//Different characters: create a function that receives a password and returns an error if every char in the password is not unique.

var goodPsswd = "1234567890";
var badPsswd = "1123456";


var noRepeatChar = function(password) {
  var array = [];
  var error = false;
  for (var i = 0; i < password.length; i++) {
    array.push(password[i]);
  }
  array.sort();
  for (var j = 0; j < array.length; j++) {
    if (array[j] === array[j + 1]) {
      error = true;
      break;
    }
  }
  if (error) {
    console.log("ERROR!!! La contraseña tiene caracteres repetidos");
  }
  return error;
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);

// Only numbers: Create a function that receives a password and returns an error
// if the password has any character different than numbers.

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function() {
  var esta;
  var error = false;
  var abecedario = "abcdefghijklmnñopqrstuvwxyz";
  for (var i = 0; i < password.length; i++) {
    esta = abecedario.indexOf(password[i]);
    if (esta != -1) {
      error = true;
      break;
    }
  }
  if (error) {
    console.log("ERROR!!! Hay una letra en tu contraseña!");
  }
  return error;
};
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);


//Ten digits only: Create a function that trim the password and turns it into a
//10 digits password. The function should keep the first 10 digits and discard the
//rest of them.
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function(password) {
  var newPass = "";
  if (password.length > 10) {
    for (var i = 0; i < password.length; i++) {
      newPass = newPass + password[i];
      if (i == 9) {
        break;
      }
    }
    console.log("Your new password is: " + newPass);
  }
  return newPass;
};
trimPassword(badPsswd);
