var opinions = [
    "This is the best job ever",
    "Satisfied",
    "At least I get paid",
    "I'm looking for another job",
    "I don't want to answer"
]

var randomOpinion = function (a) {
    return _.sample(a)
}

var pushItem = function (a) {
    var pushItems = []
    _.times(10, function() {
        pushItems.push(randomOpinion(a))
    })
    return pushItems
}

var department = function (a) {
  var depOp = []
  _.times(5, function () {
    depOp.push(pushItem(a))
  })
  return depOp
}

var employeeSatisfaction = function (a) {
  var empSat = []
  empSat.push(randomOpinion(a))
  empSat.push(pushItem(a))
  empSat.push(department(a))
  return empSat
}

console.log(employeeSatisfaction(opinions))
