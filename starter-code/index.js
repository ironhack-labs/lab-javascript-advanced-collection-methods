//iteration1
var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];

function randomAnswer (array) {
  return array[Math.floor(Math.random()*array.length)];
}

function deptSurvey() {
  var dept1 = [];
  for(var i=0;i<10;i++){
    dept1.push(randomAnswer(responses));
  }
  return dept1;
}


var employeeSatisfaction = function () {
  var array = [];
  for(var i=0;i<5;i++) {
    array.push(deptSurvey());
  }
  return array;
};
employeeSatisfaction();


//iteration 2
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


function (array) {
  for (var i =0;i<array.length;i+=2) {


  }


}
