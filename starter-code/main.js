//EMPLOYEESATISFACTION

var options = [ "This is the best job ever",
                  "Satisfied",
                  "At least I get paid",
                  "I'm looking for another job",
                  "I don't want to answer"];
// var opinions = [];

function chooseOpinion(options){
  var opinion = _.sample(options);
  return opinion;
}

function deptSurvey(){
  var opinions=[];
  for (var i = 0; i < 10; i++) {
    opinions.push(chooseOpinion(options));
  }
  return opinions;
}

// var deptSurvey = _.times(10,chooseOpinion(options));
// console.log(deptSurvey)

var employeeSatisfaction = _.times(5,deptSurvey);
console.log(employeeSatisfaction);


//HARRYPOTTER
