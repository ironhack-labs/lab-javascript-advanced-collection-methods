var _ = require('lodash');


var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"
              ];
var opinions2 = [];


function functionRandom(x) {
  return _.sample(x);
}
//console.log(functionRandom(opinions));



function addOpinions(x) {
  for ( var i = 0; i <= 9; i++ ){
    opinions2.push(functionRandom(x));
  }

  return opinions2;
}

addOpinions(opinions);



function addOpinions(x) {
  for ( var i = 0; i <= 9; i++ ){
    opinions2.push(functionRandom(x));
  }

  return opinions2;
}
