
var password = "qweesf253";
var noRepeatChar = function (password) {
  var passwordArr = password.split("");

  if (_.uniq(passwordArr).length !== passwordArr.length) {
    console.log("Password contains duplicated characters!");
  }
};
 noRepeatChar(password);


 //Only numbers

 var goodPsswd = "1234567890";
var badPsswd = "1a234567890";

var onlyNumbers = function (password) {
  var passwordArr = password.split("");
  var numarr = [];
  passwordArr.forEach(function(el) {
  numarr.push(parseInt(el));
  });

  var validation = numarr.filter(function(i){
    return isNaN(i);
  }).length > 0;

  if(validation) {
  console.log("Invalid password");
  } else {
  console.log("Valid password");
  }
};


onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);


//Ten digits only

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 return password.substr(0,10);
};

trimPassword(badPsswd);
