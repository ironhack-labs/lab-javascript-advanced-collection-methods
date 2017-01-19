//EMPLOYEESATISFACTION

var options = [ "This is the best job ever",
                  "Satisfied",
                  "At least I get paid",
                  "I'm looking for another job",
                  "I don't want to answer"];
// var opinions = [];

function chooseOpinion(){
  var opinion = _.sample(options);
  return opinion;
}

var deptSurvey = function(){
  return _.times(10,chooseOpinion);
};

var employeeSatisfaction = _.times(5,deptSurvey);
console.log(employeeSatisfaction);


//HARRYPOTTER

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


var birthdays2 = _.chunk(birthdays, 2);

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                    "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];


// console.log(birthdays2);
var moreBirthdays2 = _.chunk(moreBirthdays, 2);

var birthdaysComplete = _.concat(birthdays2, moreBirthdays2);

console.log(birthdaysComplete);

//PASSWORD PROBLEM

//unique password

var noRepeatChar = function () {
  var userPassword = prompt('Type password');
  var userPasswordSplitted = _.split(userPassword,"");
  var userUniq = _.uniq(userPasswordSplitted);
  if (userUniq.length < userPasswordSplitted.length) {
    console.log("error");
  }
};

noRepeatChar();

// letters in password

var array = ['0','1','2','3','4','5','6','7','8','9'];

var noLetters = function () {
  var userPassword = prompt('Type password');
  var userPasswordSplitted = _.split(userPassword,"");
  for (i = 0; i < userPasswordSplitted.length; i++) {
   if (_.indexOf(array,userPasswordSplitted[i]) === -1) {
     console.log("error"); break;
   }
  }
};

noLetters();

//10 digits

var keep10Digits = function () {
  var userPassword = prompt('Type password');
  var userPasswordSplitted = _.split(userPassword,"");
  var newPassword = _.slice(userPasswordSplitted, 0, 10);
   console.log(_.join(newPassword, ''));
};

keep10Digits();
