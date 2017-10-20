var _ = require('lodash');
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];



   function selectRandomOpinion(arrayy) {

       var number = Math.floor(Math.random() * arrayy.length);
       return arrayy[number];

   }

   console.log(selectRandomOpinion(opinions));

function tenTimes(opinions){
  return _.times(10, function(){
    return selectRandomOpinion(opinions);
  });

}

console.log(tenTimes(opinions));


function fivetimes(array){
  return (_.times(5, function(){
    return tenTimes(array);
  }));
}

console.log(fivetimes(opinions));
