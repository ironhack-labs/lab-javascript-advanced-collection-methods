// Array original
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

/* Array procesed
[
    [name1, birthday1]
    ...
    [nameN, birthdayN]
]
*/
function organizeBirthdays(array) {
    var organizedArray = [];
    /*
    // Solution using filter function

    // Filter Names
    var names = array.filter(function(element, index){
        return index % 2 == 0;
    });
    // Filter Birthdays
    var birthdays = array.filter(function(element, index){
        return index % 2 != 0;
    });
    for( var i = 0; i < names.length; i++ ) {
        organizedArray.push([names[i], birthdays[i]]);
    }
    */

    // Solution using reduce function
    array.reduce(function (previous, current, index) {
        //console.log("P: " + previous + ", C: " + current + ", I: " + index);
        // Iff odd then we have name and birdthday
        if ( index % 2 != 0) {
            organizedArray.push([previous, current]);
        }
        // Always previous = current in the next loop
        // so we only have to return current
        return current;
    }, "");
    return organizedArray;
}

birthdays = organizeBirthdays(birthdays);

var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
"Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];

moreBirthdays = organizeBirthdays(moreBirthdays);

for( var i = 0; i < moreBirthdays.length; i++ ) {
    birthdays.push(moreBirthdays[i]);
}

console.log(birthdays);