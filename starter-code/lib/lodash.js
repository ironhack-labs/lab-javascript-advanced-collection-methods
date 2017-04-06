var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
//select random opinion
function opinionSelect(){
  return _.sample(opinions);
}
//10 opinions pushed into new array
function pushOpinion(array){
    return _.times(10, opinionSelect);
}
//introducing the 5 department
function timesFive(){
  return _.times(5, pushOpinion);
}
console.log(timesFive());

//ITERATION3
var goodPsswd = "1234567890";
var badPsswd = "1123456";

var noRepeatChar = function (password) {
  var status = true;
 for (var i = 0; i < password.length; i++) {
   if(password.indexOf(password[i],i+1) !== -1){
    status = false;
   }
 }
 console.log(status);
};
noRepeatChar(badPsswd);


noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
