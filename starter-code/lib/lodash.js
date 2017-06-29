var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var database = [];

function pickOpinion() {
  return _.sample(opinions);
}

function intoDatabase(){
  database.push(_.times(10, pickOpinion));
}

function createDatabase(){
  for(var i = 0; i < 5; i++){
    intoDatabase();
  }
}
