// Different characters: create a function that receives a password and returns an error if every char in the password is not unique.

// 💡 Hint: Look at the Lodash Array methods. Use _.times if you need to repeat an action.

var goodPassword = "1234567890";
var badPassword = "1123456";
// var noRepeatChar = function (password) {
//  //your code goes here
// };
//
// noRepeatChar(goodPsswd);
// noRepeatChar(badPsswd);

function uniqueChecker(password) {
    var splitPassword = _.uniq(password);             //Split the password numbers into an array.
    for (i = 0; i < password.length; i++) {                                                  //Loop over the items in the splitPassword array.
    if (password[i] !== splitPassword[i]) {    //If the array item is not equal
      console.log("Error!  Bad password.");
     }
     else {
       console.log ("Looks good!");
     }
    return password;
}
}
//
// function uniqueChecker(password) {
//     for (i = 0; i < password.length; i++) {
//       if (password === _.uniq(password)){
//         return ("Error!  Bad password.");
//       }
//       else {
//         return ("Looks good!");
//       }
//     }
//   }
// //
// }

// Only numbers: Create a function that receives a password and returns an error if the password has any character different than numbers.
//
// var goodPassword = "1234567890";
// var badPassword = "1a234567890";
//
// function numberChecker (password) {
//
//   for (i=0; i < password.length; i++) {
//   if (_.isNumber(password[i])) {
//     console.log("All good.")
//   }
//
//   else if {
//     "Only numbers!"
//   }
//
// }



// Ten digits only: Create a function that trim the password and turns it into a 10 digits password. The function should keep the first 10 digits and discard the rest of them.
//
// var goodPsswd = "1234567890";
// var badPsswd = "12345678901234567890";
// var trimPassword = function (password) {
//  //your code goes here
// }
// trimPassword(badPsswd);
