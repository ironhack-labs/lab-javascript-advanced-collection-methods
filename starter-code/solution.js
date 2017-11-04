var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];

function randomResponses() {
  return responses[Math.floor(Math.random(responses) * responses.length)];
}

function generate10(){
  var array = [];
  for (var i= 0; i< 10; i++){
    array.push(randomResponses());
  }
  return array;
}

var result = responses.map(function(res){
  return generate10();
});
