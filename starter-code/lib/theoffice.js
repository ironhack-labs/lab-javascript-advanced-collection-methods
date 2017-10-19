var opinions = [
    "This is the best job ever",
    "Satisfied",
    "At least I get paid",
    "I'm looking for another job",
    "I don't want to answer"
];
// iteraccion 1

function getRandom(opinions1) {
    return opinions1[Math.floor(Math.random() * opinions.length)]


}


//getRandom(); 
//console.log(getRandom(opinions));



var opinionsArray = []
for (var i = 0; i < 10; i++) {
    opinionsArray.push(getRandom(opinions));
}

// console.log(opinionsArray);

var employeeSatisfaction = []
for (var i = 0; i < 5; i++) {
    employeeSatisfaction.push(opinionsArray);
}
console.log(employeeSatisfaction);