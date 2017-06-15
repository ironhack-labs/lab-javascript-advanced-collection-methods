var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var userOpinions=[];
function generateOpinion (){
  return _.sample(opinions);
}

function addOpinions (){

  userOpinions = _.times(10,generateOpinion);

  return userOpinions;
}

addOpinions ();

var departmentOpinions = [];

function addOpinionsDepartaments (){
  departmentOpinions = _.times(5,addOpinions);
  return departmentOpinions;
}

console.log(addOpinionsDepartaments ());


// console.log(userOpinions)
