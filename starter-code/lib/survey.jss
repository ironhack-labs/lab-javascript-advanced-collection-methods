var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];
                  
                  
function randomResponse (temp){
  var i = parseInt(Math.random()*temp.length);
  
  return temp[i];

  
}

//console.log(randomResponse(responses));


function insertResponses () {
  var oneDepartement =[];
  for (var i=0; i<10; i++) {
    oneDepartement.push(randomResponse(responses));
   }
  return oneDepartement;
}

//console.log(insertResponses());

function createSurvey() {
  var finalSurvey = [];
  for (var i=0; i<5; i++) {
    finalSurvey.push(insertResponses())
  }
  return finalSurvey;
}

console.log(createSurvey());