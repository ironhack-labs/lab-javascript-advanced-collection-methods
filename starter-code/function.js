'use strict';

var opinions = [
  "This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];


function pickOpinion(){
  return opinions[Math.floor(Math.random()*opinions.length)];
}

function makeFloorOpinions(){
    var department = [];
    for(var ix = 0; ix < 10; ix++){
      department.push(pickOpinion());
    }
  return department;
}

function createFloor(){
  var floor = [];
  for(var ix = 0; ix < 5; ix++){
    floor.push(makeFloorOpinions());
  }
  return floor;
}

console.log(createFloor());

/*var nameBirthday = birthdays.map(function(el,ix){
  if(ix % 2 === 0){
    return [el,birthdays[ix + 1]];
  }else{
    continue;
  }
});

console.log(nameBirthday);*/





var nameBirth = [];

for (var ix = 0; ix < birthdays.length; ix++){
  if(ix % 2 === 0){
    var array = [birthdays[ix],birthdays[ix+1]];
    nameBirth.push(array);
  }
}

console.log(nameBirth);
