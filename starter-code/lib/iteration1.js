var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];







function randomNumbers() {
  var random = opinions[Math.floor(Math.random() * opinions.length)];
  //console.log(random);
  //randomPush();
  return random;

}

// departments.push(opinions[0]);
var array=[];

function randomPush() {
  // randomNumbers();
  // departments.push(randomNumbers);
var departments = [];

for (var i =0; i < 10; i++) {
  departments.push(randomNumbers().split());
}
console.log(departments);
array=departments;
}

function satisfaction () {
  for( var j = 0; j < 5; j++) {
  randomPush();
  }
return array;
}

satisfaction();
