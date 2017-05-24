//ITERATION 1
//1
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
// 2
var aleatory = _.sample(opinions);

// 3
function getRandom(opinions) {
   return _.sample(opinions);
}
var newArray = _.times(10, function(){ return getRandom(opinions);

});

console.log(newArray);

//4
function tentimes(){
  return _.times(10, function(){ return getRandom(opinions);
  });
}

var departments = _.times(5, function(){return tentimes();
});

console.log(departments);
// ITERATION 3
//1
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  var Psswd = _.intersection(password.split("")).join("");
  return Psswd == password ? console.log('good password'):console.log('bad password');
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
//2
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (psw) {
  return psw.replace(/\D/g, "");
}
console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));

// 3
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  return _.truncate(password, {'length': 10,'omission': ''})
}
var newpassword = trimPassword(badPsswd);
console.log(newpassword);
