var _ = require('lodash');


var opinions = ["This is the best job ever",
    "Satisfied",
    "At least I get paid",
    "I'm looking for another job",
    "I don't want to answer"
];

function randomOpinion() {
    return _.sample(opinions);
}

function departmentOpinions() {
    return _.times(10, function() {
        return randomOpinion();
    });
}

var employeeSatisfaction = function() {
    var departmentOpinion = _.times(5, function() {
        return departmentOpinions();
    });
    return departmentOpinion;

};

console.log(employeeSatisfaction());
