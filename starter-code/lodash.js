


var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var tabOpinion = [];


function pickOpinion  () {
  var indexOpinion = Math.floor (Math.random()*opinions.length);
  return opinions[indexOpinion];
}

pickOpinion ();

var1 = _.sample(opinions);
tabOpinion.push(var1);
var2 = _.sample(opinions);
tabOpinion.push(var2);
var3 = _.sample(opinions);
tabOpinion.push(var3);



_.times(5,function(){
  var5 = _.sample(opinions);
tabOpinion.push(var5);
});

//





/*
var1 = _.sample(opinions);
tabOpinion.push(var1);
var1 = _.sample(opinions);
tabOpinion.push(var1);
var1 = _.sample(opinions);
tabOpinion.push(var1);
var1 = _.sample(opinions);
tabOpinion.push(var1);
var1 = _.sample(opinions);
tabOpinion.push(var1);
var1 = _.sample(opinions);
tabOpinion.push(var1);
var1 = _.sample(opinions);
tabOpinion.push(var1);
*/
