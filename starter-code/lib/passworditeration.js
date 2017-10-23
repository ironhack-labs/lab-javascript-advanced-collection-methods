var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {

  var arrayPassword = password.split('');
  var sortedArray = arrayPassword.sort();

    for (var i = 0; i < sortedArray.length; i++) {
      if ( sortedArray[i] == sortedArray[ i + 1]) {
        console.log( 'Bad Password!' );
      }
      else {
        console.log('Good Password');
      }

      break;
    }


};

noRepeatChar(goodPsswd);
// "Good password."

noRepeatChar(badPsswd);
// "Ouch, bad password."


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {

if ( isNaN( password ) ) {
  console.log('Bad Password');
}
else {
  console.log('Good Password');
}

};


onlyNumbers(goodPsswd);
// "Good password."

onlyNumbers(badPsswd);
// "Ouch, bad password."

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  var arrayPassword = password.split('');
   var sortedArray = arrayPassword.sort();

     for (var i = 0; i < sortedArray.length; i++) {
       if ( sortedArray.length >= 10) {
         console.log( 'Bad Password!' );
       }
       else {
         console.log('Good Password');
       }

       break;
     }
};
trimPassword(badPsswd);
// "1234567890"
