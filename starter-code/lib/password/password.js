/*
//UNIQUE CHARACTER CHECK

var goodPsswd = "1234567890";
var badPsswd = "11123456";
var noRepeatChar = function (password) {

  for(var i = 0 ; i < password.length ; i++){

      for(var j = i+1; j<password.length; j++){
        if(password[i] === password[j]){
          console.log("Your password is not unique");
          return false;
        }
      }
    }
    console.log("Your password is unique");
    return true;
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
*/
/*
//NUMBERS ONLY CHECK

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function (password) {

    for(var i=0; i<password.length; i++){

        if(password[i] !== "1"&&
           password[i] !== "2"&&
           password[i] !== "3"&&
           password[i] !== "4"&&
           password[i] !== "5"&&
           password[i] !== "6"&&
           password[i] !== "7"&&
           password[i] !== "8"&&
           password[i] !== "9"&&
           password[i] !== "0"){
          console.log("Your password is not unique");
          return false;
        }
    }
    console.log("Your password is unique");
    return true;
};

onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);
*/

//TRIM PASSWORD TO 10 DIGITS

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";

var trimPassword = function (password) {

  if(_.size(password)<=10){
    console.log("Your password is 10 characters or less");
    return true;
  } else {
    var newPassword = password.slice(0,10);
    console.log("Your password was more than 10 characters. We have kept the first 10 characters and discarded the rest. Your new password is "+newPassword+".");
    return false;
  }

};

trimPassword(badPsswd);
