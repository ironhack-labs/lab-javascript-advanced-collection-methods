
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function getSample() {
  return _.sample(opinions);
}


function workerOpinions(){
  return _.times (10, function(){
    return getSample();
  });
}


function satisfaction (){
  return _.times(5,function(){
    return workerOpinions();
  });
}


var employeeSatisfaction = satisfaction();
console.log(employeeSatisfaction);
