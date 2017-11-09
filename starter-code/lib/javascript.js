
var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];

//var marketing, contabilidad, ventas, sistemas, mantenimiento;
var departments = ["marketing", "contabilidad", "ventas", "sistemas", "mantenimiento"];
var employees = 10;

//------ select random one response
function randomResponses(resp) {
  var index = Math.floor(Math.random() * resp.length);
  return resp[index];
}
//console.log(randomResponses(responses));

//----- ad in an array X random responses for one department
function surveyDepartment(){
    var arrayResp = [];
    for(var i=0 ; i < 10 ; i++){
      arrayResp[i] = randomResponses(responses);
  }
  return arrayResp;
}
//console.log(surveyDepartment());


// ------ satisfaction of all employees from all departments
function globalEmployeeSatisfaction(){
  var finalResults = [];
  for(var i=0 ; i < departments.length ; i++){
    finalResults[i] = surveyDepartment();
  }
  return finalResults;
}

var employeeSatisfaction = globalEmployeeSatisfaction();
//console.log(globalEmployeeSatisfaction());
