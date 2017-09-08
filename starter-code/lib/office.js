function getOpinion(collection) {
    return _.sample(collection);
}

function getEmployee(array, object) {
    array.push(object);
}

function getOfficeSatisfaction(array, collection) {
    var dept = [];
    var i = 0;
    var j;

    while (i < 5) {
	j = 0;
	while (j < 10) {
	    getEmployee(dept, getOpinion(collection));
	    j += 1;
	}
	getEmployee(array, dept);
	dept = [];
	i += 1;
    }
    return array;
}

var opinions = [ "This is the best job ever",
	         "Satisfied",
	         "At least I get paid",
	         "I'm looking for another job",
		 "I don't want to answer"];

var office = [];

getOfficeSatisfaction(office, opinions);
