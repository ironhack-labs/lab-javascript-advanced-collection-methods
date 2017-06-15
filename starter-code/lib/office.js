var _ = require ('lodash');

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

var office = [];

function generateOpinion (array) {
  office.push(_.sample(array));
}

/*generateOpinion(opinions);
console.log(office);

function repeatGenerate (array) {
  generateOpinion(array).repeat(10);

}
repeatGenerate(opinions);
console.log(office);*/

_.times(10, generateOpinion(opinions));
console.log (office);
