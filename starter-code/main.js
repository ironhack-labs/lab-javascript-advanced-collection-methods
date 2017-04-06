//* Opción usando sample y times
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

                 function getOpinion() {
                   return _.sample(opinions);
                 }

                 var getDepartmentOpinion = function (){
                   return _.times(10, getOpinion);
                 };

                 var getCompanySatisfaction = function () {
                   return _.times(5, getDepartmentOpinion);
                 };

                 console.log(getCompanySatisfaction());

//* Harry Potter Funciona OK!
var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                  "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

var result1 = _.chunk(birthdays, 2);
console.log(result1);

var result2 = _.chunk(moreBirthdays, 2);
console.log(result2);

var finalResult = _.concat(result1, result2);
console.log(finalResult);
