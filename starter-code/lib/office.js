var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


function randomOpinions(arr) {
  return arr[_.random(0, arr.length-1)];
}

randomOpinions(opinions);

var listOpinions = [];

function addOpinions() {
  for (var i = 0; i < 10; i++) {
    listOpinions.push(randomOpinions(opinions));
  }
}

addOpinions();

var employeeSatisfaction = function () {
  var department = [];

  for (var i = 0; i < 5; i++) {
    department.push(listOpinions);
    console.log(i);
  }
  return department;
};

console.log(employeeSatisfaction());
