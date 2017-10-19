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

var characterAndBirthday = birthdays.splice(0,2);

console.log(characterAndBirthday);

//

var harryPotter = birthdays.reduce(function(acc,item,index) {

},[]);

///WE THOUGHT THIS COULD BE A GOOD WAY TO GET THERE

var characterAndBirthday1 = birthdays.splice(0,2);

console.log(characterAndBirthday1);

console.log(birthdays);

var characterAndBirthday2 = birthdays.splice(0,2);

console.log(characterAndBirthday2);

console.log(birthdays);
