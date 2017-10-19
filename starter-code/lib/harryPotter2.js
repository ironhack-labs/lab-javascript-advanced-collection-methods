function orderedBirthdays(){
var nameAndDay = birthdays.filter(function(element,index,array){
  var newBirthdays=[];
  if ((index)%2===0){
    newBirthdays[index]=[element,array[index+1]];
    }
return newBirthdays;
});
}

console.log(orderedBirthdays());
