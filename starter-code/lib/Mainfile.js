var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];

function oneResponse(element){
return element[Math.floor((Math.random() * element.length))];
}
oneResponse(responses);
var responsesDepartment = [];

for(var i=0; i < 10; i++) {
responsesDepartment.push(oneResponse(responses)); }

console.log(responsesDepartment);
var departmentSurvey = [];
for(var i=0; i < 5; i++) {
departmentSurvey.push(responsesDepartment); }
console.log(departmentSurvey);
