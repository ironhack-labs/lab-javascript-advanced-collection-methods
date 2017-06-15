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

console.log(survey());

function departments(){
  var global=[];
  var counter=1;
  _.times(5, function(){
    var department = _.set(department, "name", "Department"+counter);
    _.set(department, "Survey", survey());
    global.push(department);
    counter++;
  });
  return global;
}
console.log(departments())
