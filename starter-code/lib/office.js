var opinions = ["This is the best job ever", "Satisfied", "At least I get paid", "I m looking for another job", "I don\' t want to answer"];

var depAlfa = ["", "", "", "", "", "", "", "", "", ""];
var depBeta = ["", "", "", "", "", "", "", "", "", ""];
var depCharlie = ["", "", "", "", "", "", "", "", "", ""];
var depDelta = ["", "", "", "", "", "", "", "", "", ""];
var depEco = ["", "", "", "", "", "", "", "", "", ""];


//returns random idx of array
function randomOpinion(array) {
  return Math.floor(Math.random() * array.length);
}

//fill the departments with the random opinions
function fillOpinions(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = _.sample(opinions);
  }
  return array;
}

function employeeSarisfaction() {
  console.log(fillOpinions(depAlfa));
  console.log(fillOpinions(depBeta));
  console.log(fillOpinions(depCharlie));
  console.log(fillOpinions(depDelta));
  console.log(fillOpinions(depEco));
}

employeeSarisfaction();



//This is the result


/*

  - ["I m looking for another job", "At least I get paid", "I don' t want to answer", "Satisfied", "This is the best job ever", "Satisfied", "This is the best job ever", "At least I get paid", "I m looking for another job", "I don' t want to answer"]

   -["This is the best job ever", "At least I get paid", "At least I get paid", "At least I get paid", "This is the best job ever", "Satisfied", "This is the best job ever", "I don' t want to answer", "I don' t want to answer", "Satisfied"]

   -["I don' t want to answer", "I don' t want to answer", "I m looking for another job", "This is the best job ever", "I m looking for another job", "Satisfied", "At least I get paid", "I don' t want to answer", "I don' t want to answer", "This is the best job ever"]

    -["I don' t want to answer", "Satisfied", "Satisfied", "This is the best job ever", "I don' t want to answer", "This is the best job ever", "Satisfied", "At least I get paid", "I m looking for another job", "I m looking for another job"]

   -["I don' t want to answer", "At least I get paid", "I m looking for another job", "I don' t want to answer", "I don' t want to answer", "Satisfied", "I m looking for another job", "Satisfied", "I m looking for another job", "Satisfied"]
*/
