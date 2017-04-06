var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];


 /*function randomOpinion (){
 return _.sample(opinions);
}
var departament=[];
xfor (var i=0; i < 10; i++){
  var x= randomOpinion();
  departament.push(x);
}*/
/*console.log(departament);
function returnDepartmen (array){
  for (var i=0; i < 10; i++){
    var x= randomOpinion();
    array.push(x);
}
  return array;
}
console.log(returnDepartmen(departament));
var survey=[];*/


  var employeeSatisfaction= function () {
    var array = _.times(5, function (){
      var result = _.times(10, function(){
        return _.sample(opinions);
      });
      return result;
    });
    return array;
  };
    console.log(employeeSatisfaction());

/*var result = _.times(10, function(){
  return _.sample(opinions);
});
console.log(result);*/

/* Harry Potter*/
