//var _ = require("lodash");

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var departments = [];
var selectedOpinions = [];

departments = _.times(5, function() {
  var tempArray1 = [];
  var tempArray2 = [];
  selectedOpinions = _.times(10, function(){
  var randomNumber = Math.floor(Math.random() * opinions.length);
  tempArray2.push(opinions[randomNumber]);
  return tempArray2;
  });

  tempArray1.push(tempArray2);
  return tempArray2;
});

console.log(departments);

/*//FRAGMENT OF THE SOLUTION USING FOR
function randomPick(array) {
  var tempArray = [];
  for (i=0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * array.length);
    tempArray.push(array[randomNumber])
  }
  return tempArray;
}

var selectedOpinions = randomPick(opinions);

console.log(selectedOpinions);
*/
