var opinions = ["This is the best job ever","Satisfied", "At least I get paid", "I'm looking for another job", "I don't want to answer"];

function randomOpinion(){
  var randomOp = Math.floor(Math.random()*opinions.length);
  return opinions[randomOp];
}

function arrayOpinions(){
  var values=[];
  for(var ix=0; ix<10; ix++){
    values.push(randomOpinion());
  }
  return values;
}

function mixArray(){
  var finalArray = [];
  for(var ax=0; ax<5; ax++){
    var storeValues = arrayOpinions();
    finalArray.push(storeValues);
  }
  return finalArray;
}

/*console.log(arrayOpinions());
console.log(randomOpinion());
console.log(mixArray());*/

/*var employeeSatisfaction = function(){
  var result = mixArray();
  return result;
};*/

console.log(mixArray());
