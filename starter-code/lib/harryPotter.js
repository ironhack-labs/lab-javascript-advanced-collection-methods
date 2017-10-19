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
var _ = require('lodash');
var listOfNames = [];
var listOfBirthdays = [];
var listComplete = [];
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
// 2. Iteration 1 make 2xX array with 0,1 value

// Creamos una funcion a la que pasamos toda nuestra lista de nom y cumple
function oneToTwoDimensionsArray(listOfArrays){
  // Hacemos un bucle para separar nombres de cumpleaños en 2 listas diferentes
 for(var i=0; i<listOfArrays.length;i++){
   // posicion par, nombres
   if (i % 2 === 0){
     listOfNames.push(listOfArrays[i]);
     // posicion impar, cumpleaños
   }else{
     listOfBirthdays.push(listOfArrays[i]);
   }
 }
 console.log(listOfBirthdays);
 listComplete = [];
 // Juntamos en 1 array ambos 2 en un array de 2xtantos cumpleaños
 for (i = 0; i < listOfNames.length; i++){
   listComplete.push([listOfNames[i],listOfBirthdays[i]]);
 }
 return listComplete;
}

// Iteration 2
var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                    "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];
oneToTwoDimensionsArray(birthdays);
// Metemos en nuestra lista de cumpleaños la nueva lista.
listComplete.push(oneToTwoDimensionsArray(moreBirthdays));
console.log(listComplete);
