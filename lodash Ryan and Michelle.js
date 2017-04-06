
ar lodash = require('lodash');
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var employeeSatisfaction = function() {

function randomOpinion(opinion) {
  var randOpinion = lodash.random(0,opinions.length -1);
  return opinion[randOpinion];
}
randomOpinion(opinions);

function createNewArray() {
  var newArray = [];
  lodash.times(10, function(){
     newArray.push(randomOpinion(opinions));
 });
  return newArray;
}

createNewArray();


function department() {
  var finalArray = [];
  lodash.times(5, function(){
    finalArray.push(createNewArray());
  });
  return finalArray;
}

 return department();

};

console.log(employeeSatisfaction());
