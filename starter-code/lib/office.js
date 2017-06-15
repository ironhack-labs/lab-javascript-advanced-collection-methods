var _ = require('lodash');

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "Im looking for another job",
                 "I dont want to answer"];

function random(array){
  var pickUp=_.sample(array);
  return pickUp;
}


console.log(random(opinions));


function survey(){
    var opinion=[];
    _.times(10, function(){
    var result = random(opinions);
    opinion.push(result);
    });
    return opinion;
}

function departments(){
  var global=[];
  _.times(5, function(){
   var partialArray = survey();
   global.push(partialArray);
  });
  return global;
}

console.log(departments());
