var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


//step 2

function randomPick(){
  return _.sample(opinions);
}

console.log(randomPick());

//step 3
var newArray = [];
function deptAnswers(){
    _.times(10, function(){
    return newArray.push(randomPick());
  });
}

//step 4

var allDepts = [];
function allDeptsAnswers() {
        _.times(5, function() {
          deptAnswers();
    allDepts.push(newArray);
    newArray = [];
  }
);}
allDeptsAnswers();
console.log(allDepts);
