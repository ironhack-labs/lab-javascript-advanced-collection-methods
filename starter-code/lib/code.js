var opinions = [ "This is the best job ever",
"Satisfied",
"At least I get paid",
"I'm looking for another job",
"I don't want to answer"];

// Step 1
function random_selector(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

function createDepartment(options) {
    var department = [];
    for(var i = 0; i < 10; i++){
        department.push(random_selector(options));
    }
    return department;
} 

function employeeSatisfaction(options) {
    var company = []
    for(var i = 0; i < 5; i++){
        company.push(createDepartment(options));
    }
    return company;
};


var result = employeeSatisfaction(opinions);
console.log(result);




var bigArray = birthdays.reduce(function(acc, item, i){
    var newArray = [];
    if (i%2 === 0) {
        newArray.push(birthdays[i])      
        newArray.push(birthdays[i+1])
    }
    return 

},[])










