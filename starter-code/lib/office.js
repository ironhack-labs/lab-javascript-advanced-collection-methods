//var _ = require('lodash');


var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "Im looking for another job",
                 "I dont want to answer"];

function random(){
  var pickUp=_.sample(opinions);
  return pickUp;
}
console.log(random(opinions));


function survey(){
    return opinion = _.times(10, random);

}
console.log(survey);

function departments(){
  return _.times(5, survey);
}
console.log(departments());
