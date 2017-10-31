function birthdaysArranged (array) {
  var newArray = [];
  for (var i=0; i<array.length; i+=2) {
    var temp = [];
    temp.push(array[i],array[i+1]);
    newArray.push(temp);
  }
  return newArray;
}

console.log (birthdaysArranged(birthdays));

var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
                      "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];


console.log (birthdaysArranged(moreBirthdays));


var birthday1 = birthdaysArranged(birthdays);
var birthday2 = birthdaysArranged(moreBirthdays);

console.log(birthday1.concat(birthday2));
