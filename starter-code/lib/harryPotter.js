  var birthdays = ["Severus Snape", "9 January", "Arthur Weasley", "6 February",
                  "Ron Weasley", "1 March", "Remus Lupin", "10 March",
                  "Fred & George Weasley", "1 April", "Pomona Sprout", "15 May",
                   "Draco Malfoy", "5 June", "Dobby", "28 June",
                   "Neville Longbottom", "30 July", "Harry Potter", "31 July",
                   "Ginevra Weasley", "11 August", "Percy Weasley ", "22 August",
                   "Hermione Granger", "19 September", "Minerva McGonagall",
                   "4 October", "Filius Flitwick", "17 October", "Molly Weasley",
                   "30 October", "Bill Weasley", "29 November", "Rubeus Hagrid",
                   "6 December", "Charlie Weasley", "12 December"];

var birthd = birthdays.reduce(function(acc, elem, index) {
  if (index % 2 === 0) {
    acc.push([elem, birthdays[index+1]]);
  }
  
  return acc;
}, [])

var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March", "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];

var mBirthd = moreBirthdays.reduce(function(acc,elem,index){
  
  if (index % 2 === 0) {
    acc.push([elem, moreBirthdays[index+1]]);
  }
  
  return acc;
},[])







//The office//





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
