var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];



function selectOpinion(x){
  var index = _.random(0,x.length-1,false);
  //console.log(x[index]);
  return x[index];
}
/*
selectOpinion(opinions);
*/
function department(y){
  var odep = [];
  for(var i = 0; i<10; i++){
  odep.push(selectOpinion(y));
  }
  return odep;
  }

//department(opinions);

function finalList( array){
  var dep = [];
  for (var i=0; i<5;i++){
    dep.push(department(array));
  }
  return dep;
}
var result=finalList(opinions);
console.log(result);
