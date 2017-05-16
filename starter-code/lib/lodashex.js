//ITERATION 1
//1
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
// 2
var aleatory = _.sample(opinions);

// 3
function getRandom(opinions) {
   return _.sample(opinions);
}
var newArray = _.times(10, function(){ return getRandom(opinions);

});

console.log(newArray);

//4
function tentimes(){
  return _.times(10, function(){ return getRandom(opinions);
  });
}

var departments = _.times(5, function(){return tentimes();
});


console.log(departments);
