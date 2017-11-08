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

//Create a function that receives the messy birthday array and returns a
//new, two-dimensional array with a bit more structure.
//The new array should have inside several small arrays: one for each character.
//Each of the internal small arrays should have the name of one character and
//their birthday.

var newBirthdays = [];
function splitBirthdays (element) {

 for (var i=0; i<element.length; i+=2) {
 var tmp = [];
 tmp.push(element[i],element[i+1]);
 newBirthdays.push(tmp);
 }
return newBirthdays;
 }

 console.log (splitBirthdays(birthdays));

//Now that we have our two-dimensional array, we realized that some characters and their birthdays were missing. After a little more digging, we found another array with more birthdays from the book. Paste it into your JavaScript file.

var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
                                         "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];
//Luckily, the moreBirthdays array follows the same structure as the previous array. That means we can use our function from step 1 to restructure the birthdays into a second two-dimensial array.

var secondNewBirthdays = [];
function splitmoreBirthdays (element) {

 for (var i=0; i<element.length; i+=2) {
 var tmp = [];
 tmp.push(element[i],element[i+1]);
 secondNewBirthdays.push(tmp);
 }
return secondNewBirthdays;
 }

 console.log (splitmoreBirthdays(birthdays));

//Combine the contents of the two-dimensional array from step 1 and the two-dimensional array from step 3 so that there is one big two-dimensional array with all the pairings of characters and their birthdays.


var definitiveBirthdays = newBirthdays.map(function(elem,i){
   return {a:elem,b:secondNewBirthdays[i]};
});

console.log(definitiveBirthdays);
