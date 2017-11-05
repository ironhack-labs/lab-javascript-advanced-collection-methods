// Number of employees
var employees = 10;

// array with possible responses
var responses = [ 
    "This is the best job ever!",
    "Satisfied.",
    "At least I get paid.",
    "I'm looking for another job.",
    "I don't want to answer." 
];

// Departments names
var departments = ["Finance", "HR", "IT", "Sales", "Marketing"];

// Get random response
function getRandomResponse(arrayResponses) {
    return arrayResponses[Math.floor(Math.random() * arrayResponses.length)];
}

// Get a random response for each employee
function getEmployeesResponses(arrayResponses, numEmployees) {
    var employeesResponses = [];
    for ( var i = 0; i < numEmployees; i++ ) {
        employeesResponses.push(getRandomResponse(arrayResponses));
    }
    return employeesResponses;
}

function surveyDepartments(arrayDepartments, arrayResponses, numEmployees){
    var departmentResponses = [];
    arrayDepartments.forEach(function(element) {
        departmentResponses.push(getEmployeesResponses(arrayResponses, numEmployees));
    });
    return departmentResponses;
}

// Get the results and print into console
var employeeSatisfaction = surveyDepartments(departments, responses, employees);
for ( var i = 0; i < departments.length; i++ ) {
    console.log("The result of the department " + departments[i].toUpperCase() + " are:\n\r");
    for ( var j = 0; j < employees; j++) {
        console.log(departments[i].toUpperCase() + ": " + employeeSatisfaction[i][j]);
    }
    console.log ("\n\r");
}