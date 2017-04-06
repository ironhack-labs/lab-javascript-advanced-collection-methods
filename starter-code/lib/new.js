var opinions = [ "This is the best job ever",
                  "Satisfied",
                  "At least I get paid",
                  "I'm looking for another job",
                  "I don't want to answer"];

function randomOpinion(opinion) {
  return _.sample(opinion);
}

function tenTimesPush() {
  var array = [];
   _.times(10, function(){
     array.push(randomOpinion(opinions));
   });
   return array;
}

var employeeSatisfaction = function () {
  var arr = [];
  _.times(5, function(){
    arr.push(tenTimesPush());
  });
  return arr;
};

var print = tenTimesPush();
var departments = employeeSatisfaction();


console.log(departments);


// console.log(_.times(4, _.constant(0)));
