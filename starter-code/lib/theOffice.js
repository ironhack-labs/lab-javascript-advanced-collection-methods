var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];


  var arrays = [];
  function randomResponse(array){
    return array[Math.floor(Math.random() * array.length)];
  }

randomResponse(responses);

function department(){
  var answer =[];

      for(var i = 0; i < 10; i++){
          answer.push(randomResponse(responses))
      }
      console.log(answer)
      

  return answer;
}
function totalDepartment(){
  var answerFinal = [];

  for(var i= 0; i < 5; i++){
    answerFinal.push(department())
  }
  console.log(answerFinal)
  
  
}