var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var employeeSatisfaction = function () {
    var departmentsOpinions = [];
    _.times(5, function(){
        departmentsOpinions.push(_.times(10, function(){
       return _.sample(opinions);
    }));
    })

    return departmentsOpinions;
}

var result = employeeSatisfaction();
console.log(result);

