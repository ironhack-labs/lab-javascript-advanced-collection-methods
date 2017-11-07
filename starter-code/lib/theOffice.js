var responses = [ "This is the best job ever!",
"Satisfied.",
"At least I get paid.",
"I'm looking for another job.",
"I don't want to answer." ];
function random_selector(array) {
   return Math.floor(Math.random() * array.length);
 }
function res(){
   var answers=[];
   for(var i = 0; i < 10; i++){
   answers[i] = responses[random_selector(responses)];
   }
   return answers;
}

var employeeSatisfaction = function () {
  var answersDepartaments = [];
  for(var i = 0; i <5; i++){
    answersDepartaments.push(res());
  }
  return answersDepartaments;
};
console.log("The array solution is: ");
console.log(employeeSatisfaction());
