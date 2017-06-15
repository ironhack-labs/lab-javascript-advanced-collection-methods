function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function createArrayOpinions(){
  var arrayOpinions = [];
  for(var i = 0;i<6;i++){
    var randomIndex = getRandomInt(0,opinions.length);
    arrayOpinions.push(opinions[randomIndex]);
  }
  return arrayOpinions;

}

function createFinalArray(){
  finalArray.push(createArrayOpinions());
}
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
                 

var finalArray= [];

var employeeSatisfaction = function () {
  for(var i = 0;i<10;i++){
    createFinalArray();
  }
  
  return finalArray;
};

console.log(employeeSatisfaction());
