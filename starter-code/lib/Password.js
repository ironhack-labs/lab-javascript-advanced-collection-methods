


//Rules we will enforce on our users' passwords:

//No character can be used more than once.
////Only digits are allowed. No letters or special characters or anything else.
//We will cut all passwords down to 10 characters if the user gives us a password that exceeds that length.
//Unique characters: Create a function that checks that each character only appears once in the password. It should receives a password and display Ouch, bad password. in the console if there are any repeated characters. Otherwise, it should display Good password. in the console.

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password, item) {
for (i=0; i<password.length; i++) {
 if (item === password[i]){
   return "Good password.";
 } else {
   return "Ouch, bad password.";
 }
}
};

noRepeatChar(goodPsswd);
// "Good password."

noRepeatChar(badPsswd);
// "Ouch, bad password."

//Only numbers: Create a function that checks that a password only has numbers. It should receives a password and display Ouch, bad password. in the console if there are any characters that aren't numbers. Otherwise, it should display Good password. in the console.

var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
 for(i=0; i<password.length; i++){
   if(password[i] !== ""){
     return "Ouch, bad password.";
   } else {
     return "Good password.";
   }
 }
};

onlyNumbers(goodPsswd);
// "Good password."

onlyNumbers(badPsswd);
// "Ouch, bad password."

//Ten digits only: Create a function thats trim the password down to only 10 digits. The function should receive a password, discard all characters after the 10th (index 9 of the string) and display the trimed password in the console.

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 for(i=0; i<10; i++){
   if(password.length > 9){
     return password.slice(0, 9);
   }else {
     return password;
   }
 }
};
trimPassword(badPsswd);
// "1234567890"
