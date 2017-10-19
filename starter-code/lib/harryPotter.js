 var birthdays = ["Severus Snape", "9 January", "Arthur Weasley", "6 February",
     "Ron Weasley", "1 March", "Remus Lupin", "10 March",
     "Fred & George Weasley", "1 April", "Pomona Sprout", "15 May",
     "Draco Malfoy", "5 June", "Dobby", "28 June",
     "Neville Longbottom", "30 July", "Harry Potter", "31 July",
     "Ginevra Weasley", "11 August", "Percy Weasley ", "22 August",
     "Hermione Granger", "19 September", "Minerva McGonagall",
     "4 October", "Filius Flitwick", "17 October", "Molly Weasley",
     "30 October", "Bill Weasley", "29 November", "Rubeus Hagrid",
     "6 December", "Charlie Weasley", "12 December"
 ];

 var moreBirthdays = [" Lily Evans ", " 30 de enero ", " James Potter ", " 27 de marzo ",
     " Dudley Dursley ", " 30 de junio ", " Tom Riddle ", " 31 de diciembre "
 ];

 var totalBirthdays = birthdays.concat(moreBirthdays);

 console.log(typeof totalBirthdays)


 var data = totalBirthdays.length;
 console.log(totalBirthdays.length)

 var tecla = []
 for (var i = 0; i <= data; i++) {
     if (totalBirthdays.indexOf(totalBirthdays[i]) % 2 === 0) {
         tecla.push([totalBirthdays[i], totalBirthdays[i + 1]]);

     }

 }
 console.log(tecla);