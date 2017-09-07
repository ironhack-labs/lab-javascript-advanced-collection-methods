var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


function getRandomOpinion(allopinions){
  var randomIndex = _.random(0, allopinions.length - 1);
  return allopinions[randomIndex];
}
console.log(getRandomOpinion(opinions));

// This function can return [ "This is the best job ever", "Satisfied", "I'm looking for another job", "Satisfied", "Satisfied", ... ]
function pushitem(foo){
  var randomopinions = [];
  for (i=0; i<10; i++){
    randomopinions.push(getRandomOpinion(foo));
  }
  return randomopinions;
}
console.log(pushitem(opinions));



/*function getRandomOpinion(opinions){
  var randomIndex = _.sample(opinions);
  return opinions[randomIndex];
}
getRandomOpinion(opinions);
*/
