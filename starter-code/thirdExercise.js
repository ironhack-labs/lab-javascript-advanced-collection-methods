
function checkPassword(password){
  for(var i =0;i<password.length;i++){
    for(var j = 0;j<password.length;j++){
      if(i !== j){
        if(password[i] === password[j]){
          return false
        }
      }
    }
  }
  return true;
}

function checkPasswordNumbers(password){
  for(var i =0;i<password.length;i++){
    if(isNaN(password[i])){
      return false;
    }
  }
  return true;
}


var password = prompt("Enter a password:");

if(checkPassword(password)){
  console.log("All good");
}
else{
  console.log("The password is not unique");
}

password = prompt("Enter a password:");

if(checkPasswordNumbers(password)){
  console.log("All good");
}
else{
  console.log("The password contains a non number");
}

var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  if(password.length >= 10){
    return password.slice(0,10);
  }
  else{
    return "error, not long enough";
  }
}
trimPassword(badPsswd);



