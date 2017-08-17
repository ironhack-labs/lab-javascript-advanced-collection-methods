var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];




function samplingMethod(opinion1){
  return _.sample(opinion1);
}

function collection(opinion2) {
  return _.times(10, function(){
    return samplingMethod(opinion2);
  });
}

function masterCollection(opinion3) {
  return _.times(5, function(){
    return collection(opinion3);
  });
}

var result = masterCollection(opinions);
console.log(result);




// _.times(5, function(){
//     // ...
// });


//
// var employeeSatisfaction = function () {
// // Steps 2, 3 and 4 here
// return array;
// };


// var collection = opinions.forEach(samplingMethod(opinions){
//   return opinions*10;
// });
