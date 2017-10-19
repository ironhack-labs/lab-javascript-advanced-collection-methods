var _ = require('lodash');


var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


   for(var i=0; i<5; i++){
     var aleatorio =_.sample(opinions);
     opinions.push(aleatorio);
   }

console.log(opinions)

var another = [];

  for(var i=0; i<5; i++){
    another.push(opinions);
   }

console.log(another)
