//---------Variables--------------
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
var departments = [];
var numberOfRandoms;
var departmentSize;
//---------Functions--------------
function randomInList( list ) {
    var upper = list.length - 1;
    return Math.floor( Math.random() * upper );
}
function fillRandomList(numberOfTimes, sourceList){
    var i = numberOfTimes;
    var arrayOfRandoms = [];
    while(i > 0){
        arrayOfRandoms.push(sourceList[randomInList(sourceList)]);
        i--;
    }
    return arrayOfRandoms;
}
function fillArrayWithRandomLists(matrix, numberOfRandoms, matrixRowNumber, sourceList){
    var i = matrixRowNumber;
    while(i > 0){
        matrix.push(fillRandomList(numberOfRandoms, sourceList));
        i--;
    }
    return;
}
//---------Run--------------
departmentSize = Number(prompt("Please enter the number of  departments:"));
numberOfRandoms = Number(prompt("Please enter the number of opinions in each department:"));
fillArrayWithRandomLists(departments, numberOfRandoms, departmentSize, opinions);
console.log("Here are the random opinions of your departments:\n",departments);
