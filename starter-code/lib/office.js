//1. Random pick function
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

/*function randomElement(array) {
 return array[Math.floor(Math.random()*array.length)];
}*/

function randomVal(){
return _.sampleSize(opinions,1).join();
}
console.log(randomVal())

// Create a function that pushes the item into the array. You will need to repeat this procedure ten times to create an array of 10 opinions.

function department(){
	return _.times(10,randomVal)
}

console.log(department())

// Create another function that pushes the 10-items-array into another array. You will need to do this five times to create the five departments

function company(){
	return _.times(5, department)
}
console.log(company());