var noRepeatChar = function(password) {
  var ascd = [].slice.call(password).sort(function(a, b) {
    return a - b;
  });
  var same = ascd[0],
    cont = 0;
  var working = ascd.map(function(el) {
    cont = (el == same) ? cont += 1 : cont;
    same = el;
  });
  return (cont > 1) ? "Ouch, bad password." : "Good password.";
};
var onlyNumbers = function (password) {
  return (isNaN(Number(password)))?"Ouch, bad password." : "Good password.";
};
var trimPassword = function (password) {
 return (password.length!==10)?"Ouch, bad password." : "Good password.";
};
var onlyString = function(password){
  return (typeof password === 'string' || password instanceof String)?password:"The password is not a string";
};
