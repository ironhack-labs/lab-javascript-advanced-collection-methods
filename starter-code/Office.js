
var result =_.random([0], [4]);

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


var myopinion  = opinions[result];

console.log(myopinion);

function tenArray(a) {
  for (var i = 0; i < 10; i++) {
  opinions.push(myopinion);
}
return(opinions);
}
console.log(opinions);
