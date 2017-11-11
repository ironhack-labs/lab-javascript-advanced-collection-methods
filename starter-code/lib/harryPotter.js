//Harry Potter's Birthdays//

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

//creamos la funcion para hacer un nuevo array devido en pares de arrays por persona
structureArray = function(messyArray) {
var output = messyArray.reduce(function (result, elem, index, array) {
if (index % 2 === 0) {
result.push([elem, array[index + 1]]);
return result;
}
return result;
}, [])
return output;
}

var birthadaysOk = structureArray(birthdays);
console.log(birthadaysOk);


var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March", "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];

var moreBirthadaysOk = structureArray(moreBirthdays);
console.log("los cumples a añadir:");
console.log(moreBirthadaysOk);

//añadimos los nuevos registros ok al array birthadaysOk                    
moreBirthadaysOk.forEach(function(element){
birthadaysOk.push(element);
});


console.log('y el resultado final de todos los cumples de Harry Potter es:');
console.log(birthadaysOk);
