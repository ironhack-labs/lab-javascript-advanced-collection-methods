 var birthdays = ["Severus Snape", "9 January", "Arthur Weasley", "6 February",
                  "Ron Weasley", "1 March", "Remus Lupin", "10 March",
                  "Fred & George Weasley", "1 April", "Pomona Sprout", "15 May",
                   "Draco Malfoy", "5 June", "Dobby", "28 June",
                   "Neville Longbottom", "30 July", "Harry Potter", "31 July",
                   "Ginevra Weasley", "11 August", "Percy Weasley ", "22 August",
                   "Hermione Granger", "19 September", "Minerva McGonagall",
                   "4 October", "Filius Flitwick", "17 October", "Molly Weasley",
                   "30 October", "Bill Weasley", "29 November", "Rubeus Hagrid",
                   "6 December", "Charlie Weasley", "12 December"];

 var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                      "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

function organized(array){
  var bd = [];
  var organized = [];
  for( var i = 0; i < array.length ; i ++){
    if(array[i] % 2 !== 0){
      bd.push(array[i]);
    }
    else {
      organized.push(array[i]);
    }
  }

  for(var j = 0 ; j < organized.length; j++ ){
    organized.push(bd[j]);
  }
  return organized;
  //console.log(organized);
}

function org2(birthdays){
  var organized =[];
  birthdays.forEach (function(name, i){
    if (i % 2 === 0) {
      organized.push(name);
    }
  });
  birthdays.forEach(function(bd,i){
    if (i % 2 !== 0){
      organized[i].push(bd);
    }
  });
  return organized;
}

var j = org2(birthdays);
console.log(j);
//console.log(organizedBirthdays);
