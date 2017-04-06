// Primer ejercicio

var opinions = [ "This is the best job ever",
                  "Satisfied",
                  "At least I get paid",
                  "I'm looking for another job",
                  "I don't want to answer"];
// Segundo ejercicio

function pickOpinion() {
  return opinions[Math.floor(Math.random() * opinions.length)];
};

// Tercer ejercicio

function departmentOpinion(){
    return _.times(10, pickOpinion);
};

// Cuarto ejercicio

function DepartmentSurvey() {
    return _.times(5, departmentOpinion);
}

// Quinto ejercicio


console.log(departmentOpinion());
console.log(DepartmentSurvey());
