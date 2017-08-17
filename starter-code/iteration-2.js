
function combineBirthdays() {

  return _.chunk(birthdays, 2);

}

var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

function combineAllBirthdays() {

  var allBirthdays = _.concat(_.chunk(moreBirthdays,2), combineBirthdays());
  return allBirthdays;

}

var finalBirthdayList = combineAllBirthdays();
console.log(finalBirthdayList);
