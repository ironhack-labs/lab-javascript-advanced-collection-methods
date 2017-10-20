var opinions = [
  'This is the best job ever',
  'Satisfied',
  'At least I get Paid',
  'I\'m looking for another job',
  'I don\'t want to answer'
];

function opinionRandom (array) {
  return array[Math.floor(Math.random() * opinions.length)];
}

//console.log(opinionRandom(opinions));

function  opinionsList(number) {
  var opinion = [];
  for (var i=0; i < number; i++)  {
    opinion.push(opinionRandom(opinions));
  }
  return opinion;
}

var workersOpinions = opinionsList(10);

//console.log(workersOpinions);

function employeeSatisfaction(temp) {
    var departments = [];
    for (var x=0; x < temp; x++){
      for (var i=0; i < temp; i++); {
      departments.push(workersOpinions);
      }
    }
    return departments;
}


console.log(employeeSatisfaction(5));

//HARRY POTTER EXERCISE

// for (var x = 0; x < birthdays.length; x++){
// }
//   for (var y = 0; y < birthdays.length; y++){
//       if x =
//   }
