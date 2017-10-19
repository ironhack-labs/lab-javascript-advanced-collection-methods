
var password = "qweesf253";
var noRepeatChar = function (password) {
  var passwordArr = password.split("");

  if (_.uniq(passwordArr).length !== passwordArr.length) {
    console.log("Password contains duplicated characters!");
  }
};
 noRepeatChar(password);
