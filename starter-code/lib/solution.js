

// ITERATION 1---------

/*var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


function randomizer() {
  var indexNum = Math.floor(Math.random()*opinions.length);
  return opinions[indexNum];
}

function departmentOpinions() {
  var departmentSolutions = [];
  for ( var i = 0; i < 10 ; i++) {
    departmentSolutions.push(randomizer());
  }

  return departmentSolutions; // array of 10 opinions
}

function companyOpinions() {
  var companySolutions=[];
  for (var i = 0; i < 5; i++) {
    companySolutions.push(departmentOpinions());
  }
  return companySolutions;
}

// -- temporary just for testing


console.log(companyOpinions());
*/

//ITERATION 2-------




var pairedUp = birthdays.reduce(function(accu,item,index,array){
                if (index % 2 === 0){
                  accu.push([item, array[index + 1]]);
                }
                  return accu;
                },[]);

function birt(array) {
  var temp = [];
  array.forEach(function(item,index,array){
    if (index % 2 === 0){
      temp.push([array[index], array[index + 1]]);
    }
});
return temp;
}


console.log(birt(birthdays));
console.log(birt(birthdays2));
