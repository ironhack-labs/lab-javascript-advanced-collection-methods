var _ = require('lodash');
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


_.sample(opinions);

var people=[1,2,3,4,5,6,7,8,9,10];
var arrayPeople = people.map(function(){
  return _.sample(opinions);
})


function mifuncion (){
  var output=_.times(10,function(){
    return _.sample(opinions)
  })
  return output;
}
mifuncion();


var employeeSatisfaction = _.times(5,function(){
  return mifuncion()
});

console.log(employeeSatisfaction)
