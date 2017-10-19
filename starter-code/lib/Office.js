//ITERATION 1
var _ = require('lodash')

var opinions = ["This is the best job ever",
                "Satisfied",
                "At least I get paid",
                "I'm looking for another job",
                "I don't want to answer"]


var departments = [[],[],[],[],[]]

departments.map(function(e){
      var y = 0
      while(y < 10){
        e.push(_.shuffle(opinions)[0])
        y++
      }
      return e
})

console.log(departments)
