var _ = require('lodash');

var opinions = ["This is the best job ever",
    "Satisfied",
    "At least I get paid",
    "I'm looking for another job",
    "I don't want to answer"
];

var randomOpinion = function(a) {
    return _.sample(a);
}

var pushItem = function(b) {
    var pushItems = [];
    _.times(10, function() {
        pushItems.push(randomOpinion(b));
    });
    return pushItems;
}

console.log(randomOpinion(opinions));
console.log(pushItem(opinions));