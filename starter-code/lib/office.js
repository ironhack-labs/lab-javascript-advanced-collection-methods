var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];



function pickUpRandomOpinion (element) {
  var randomOpinion = _.sample(element);
  return randomOpinion;
}

var collectedOpinions = [];

// for (var i =0; i<10;i++) {
//   collectedOpinions.push(pickUpRandomOpinion(opinions));
// }

_.times(10, collectedOpinions.push(pickUpRandomOpinion(opinions))

console.log(collectedOpinions);


function pushRandomOpinions (element) {

}
