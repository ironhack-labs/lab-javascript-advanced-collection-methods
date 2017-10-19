// 5 departments 10 people each array satisfaction

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function rand(array) {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
}
//console.log(rand(opinions));



function tenTimes(){
var tenArray =[];
  for (var i = 0; i < 10; i++) {
    tenArray.push(rand(opinions))  ;
  }
return tenArray;
}


    function fiveTimes(){
    var fiveArray =[];
    for (var i = 0; i < 5; i++) {
    fiveArray.push(tenTimes())  ;
}
return fiveArray;
}


var employeeSatisfaction = function () {
console.log(fiveTimes());
};

employeeSatisfaction();
