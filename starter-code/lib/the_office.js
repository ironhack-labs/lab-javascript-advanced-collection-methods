var _ = require('lodash');
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];



function randomizeOpinions(){
 var randomIndex = Math.floor(Math.random()*opinions.length);
 return opinions[randomIndex];
}
randomizeOpinions(opinions);

var randomOpinion = randomizeOpinions();
function departmentOpinions(numberOfPeople){

 return(_.times(numberOfPeople, function(){
  return randomizeOpinions();
 }));
}
departmentOpinions();

function employeeSatisfaction (numberOfDepartments,numberOfPeople){

     return(_.times(numberOfDepartments, function(){
     return departmentOpinions(numberOfPeople);
 }));
}
console.log(employeeSatisfaction(5,10));
