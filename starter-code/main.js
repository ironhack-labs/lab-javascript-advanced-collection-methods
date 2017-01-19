//opinions
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


var tenGroups=_.times(5, function(){
  return _.times(10, function(){
    return _.sample(opinions);
  });
  });

console.log(tenGroups);
