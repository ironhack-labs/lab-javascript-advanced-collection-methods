var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

// 2
_.sample(opinions);

//3




//4

function getRandom(opinions) {
    return _.sample(opinions);
}

var employeeSatisfaction = function (opinions) {

  var newArray = _.times(10, function(){ return getRandom(opinions)});
  var depart = _.times(5, function(){return newArray;});

  return depart;
};
