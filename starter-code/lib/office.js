var _ = require('lodash');

var opinions = [
      "This is the best job ever",
      "Satisfied",
      "At least I get paid",
      "I'm looking for another job",
      "I don't want to answer"
   ];

function randomly (){
  return _.sample(opinions);
}


function times(){
  return _.times(10, function(){return _.sample(opinions)})
}

times()
