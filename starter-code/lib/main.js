//----------------------------Iteration 1 - The Office

var opinions = [
  "This is the best job ever",
  "Satisfied",
  "At least I get paid",
  "I'm looking for another job",
  "I don't want to answer"
];
//console.log(_.sample(opinions));

var deptArr = ["","","","",""];

var deptArrOpi = deptArr.map(function(){
  return [1,2,3,4,5,6,7,8,9,10].map(function(){
    return _.sample(opinions);
  });
});
//console.log(deptArrOpi);

//----------------------------Iteration 3 - The Password Problem

var goodPsswd = "1234567890",
badPsswd = "1123456";

var noRepeatChar = function (password) {
  if (_.includes(goodPsswd,password)){
    return "Buena password";
  }else{
   return "Mala password";
  }
};

//console.log(noRepeatChar(goodPsswd));
