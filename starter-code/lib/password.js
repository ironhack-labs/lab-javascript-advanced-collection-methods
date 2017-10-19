

var goodPsswd = "91234567890";
var badPsswd = "1123456";

console.log(goodPsswd.split("").sort());

var array = goodPsswd.split("").sort()


array.forEach(function(element){

  if(array[element]==array[element+1]){
    console.log("not valid")
  }


})
