
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function randomlyPick() {

  //We have to use _.sample()
    var randomValue = _.random(opinions.length - 1);
    var opinion = opinions[randomValue];

    return opinion;

}

function getOpionionOfEmployee() {

  var newOpinions = [];
  var newOpinion;

  _.times(10, function(){

    newOpinion = randomlyPick();
    newOpinions.push(newOpinion);

  });

  return newOpinions;

}

function getAllOpinions() {

  var companyOpinion = [];
  _.times(5, function() {

    companyOpinion.push(getOpionionOfEmployee());

  });

  return companyOpinion;

}

function showAllOpinions() {

  var allOpinions = getAllOpinions();
  console.log(allOpinions);

  _.map(allOpinions, function(department) {

    //This numberOfDepartment can be wrong because are the possibility that two department
    //have the same opinions.
    var numberOfDepartment = _.indexOf(allOpinions, department) + 1;
    console.log("The deparment number " + numberOfDepartment + " has the opinions: ");

    _.map(department, function(opinion){

      console.log(" - " + opinion);

    });

  });


}

showAllOpinions();
