var _ = require('lodash');

var opinions = [ "This is the best job ever",
                "Satisfied",
                "At least I get paid",
                "I'm looking for another job",
                "I don't want to answer"];

var size = opinions.length - 1


var randomOpinion = function(opinions){
 var a = _.random(0, size);
 var opinion = opinions[a]
 return opinion
}

var opinionWorkers =[]

for(var i = 0; i < 10 ; i++){
 randomOpinion(opinions)
 opinionWorkers.push(opinion)
}
console.log(opinionWorkers)
