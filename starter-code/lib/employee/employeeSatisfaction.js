var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var randomPick = function(array){
  return _.sample(array);
};
//This will pick a random opinion.
//console.log(randomPick(opinions));

//var pushOnce = function(array){
//  return array.push(randomPick());
//};
//Push the random option into the new array.
//pushOnce();
//console.log(newArray10);

var pushTen = function(array){
  var result = [];
  for(var i=0; i<10 ; i++){
     result.push(randomPick(array));
  }
  return result;
};
//Do the above ten times.
//pushTen(opinions);
//console.log(newArray10);

var employeeSatisfaction = function(array){
  var result = [];
  for(var j=0; j<5; j++){
    result.push(pushTen(array));
  }
  return result;
};

var employees = employeeSatisfaction(opinions);
console.log(employees);
