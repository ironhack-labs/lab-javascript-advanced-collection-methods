var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

//Iteraccion 1

function samples (a) {
    var opinionSamples = _.sample(a);
    return opinionSamples;
}

//Itraccion 2

var collectedOpinions=[];

function collector (b) {
  collectedOpinions.push(collectedOpinions);
}

function colection (c){
  var times = _.times(10, collector);
  console.log(collectedOpinions);
}

colection(opinions);
