/* --------------------ITERATION 1-----------------------*/

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];



//RANDOM OPINION
function randomOpinion(array) {
  var opinion = array[Math.floor(Math.random()*array.length)];
  return opinion;
}

//1 DEPARTMENT OPINIONS
function departmentOpinions() {
  var opinionsArray = [];
  for (var index = 0; index < 10; index ++) {
    opinionsArray.push(randomOpinion(opinions));
  }
  return opinionsArray;
}

// ALL DEPARTMENTS OPINIONS
function companyOpinions() {
  var results = [];
  for (var index = 0; index < 5; index ++) {
    results.push(departmentOpinions());
  }
  return results;
}

console.log(companyOpinions());
