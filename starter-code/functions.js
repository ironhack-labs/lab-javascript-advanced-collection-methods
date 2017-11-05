var responses = [ "This is the best job ever!",
"Satisfied.",
"At least I get paid.",
"I'm looking for another job.",
"I don't want to answer." ];

var employeeSatisfaction = function () {
    //Step2
    function randomResponse(responses){
        return responses[Math.floor(Math.random()*responses.length)];
    }
    //Step3
    function employeesResponses(responses){
        var empResp = [];
        for(var i=0;i<10;i++){
            empResp.push(randomResponse(responses));
        }

        return empResp;
    }
    //Step4
    function departmentResponses(responses){
        var deptResp = [];
        for(var i=0;i<5;i++){
            deptResp.push(employeesResponses(responses));
        }
        return deptResp;
    }
    
    
    return departmentResponses(responses);
  };