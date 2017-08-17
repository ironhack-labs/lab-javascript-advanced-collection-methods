var goodPsswd = "1234567890";
var badPsswd = "1123456";
var ourPass = "923562935698375";

var noRepeatChar = function(p) {
  var evalPsw = _.uniq(p).length !== p.length;
  if (evalPsw) {
    console.log("Ese peazo de password es incorrecto. No repitas caractererrrrrs.");
  } else {
    console.log("Pecador, ese es correcto, no hay caracteres repetidos.");
  }
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
noRepeatChar(ourPass);
/*
goodPsswd = "1234567890";
badPsswd = "1a234567890";

var onlyNumbers = function(p) {

  _.forEach(p, function(value) {
    var x = value_.isNaN();
  });
  if (x) {
    console.log("Ese peazo de password es incorrecto: ¡¡Solo admite valores numericorsss.!!!");
  } else {
    console.log("Pecador, ese es correcto, todos son números.");
  }
};


onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);
*/
