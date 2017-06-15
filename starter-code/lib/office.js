var _ = require ('lodash');

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var office = [];

_.times(10, function() {
office.push(_.sample(opinions));});
console.log (office);
