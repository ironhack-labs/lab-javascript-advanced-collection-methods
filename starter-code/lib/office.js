var _ = require('lodash');

var opinions = [ "This is the best job ever",
                "Satisfied",
                "At least I get paid",
                "I'm looking for another job",
                "I don't want to answer"];




var randomOpinion = function(array){
 var size = array.length - 1;
 var a = _.random(0, size);
 var result = array[a];
 return result;
}

var departament = function(){
  var opinionWorkers =[]
  for(var i = 0; i < 10 ; i++){
   var n = randomOpinion(opinions)
   opinionWorkers.push(n)
  }
  return opinionWorkers;
}

var opinionWorkers =[]

for(var i = 0; i < 5 ; i++){
 var d = departament();
 opinionWorkers.push(d)
}
console.log(opinionWorkers)
