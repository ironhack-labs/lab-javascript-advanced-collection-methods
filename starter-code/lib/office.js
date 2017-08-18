var _ = require('lodash');

var names;

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function office (){
//  console.log('entro a office')
  return _.sample(opinions) ;
}

function repeatTimes () {
//  console.log('entro a repeatTimes')
 return  _.times(10,office);
}

var names = repeatTimes();


function repeatFiveTimes (){
  return _.times(5,repeatTimes);
}

names = repeatFiveTimes();
console.log(names);
