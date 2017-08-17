var office = [
  {
    department: "d01",
    workers: [
      {name: "Pepe"},
      {name: "Lola"},
      {name: "Juan"},
      {name: "Ramón"},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""}
    ]
  },
  {
    department: "d02",
    workers: [
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""}
    ]
  },
  {
    department: "d03",
    workers: [
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""}
    ]
  },
  {
    department: "d04",
    workers: [
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""}
    ]
  },
  {
    department: "d05",
    workers: [
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""}
    ]
  }
];

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function pickUp(e) {
  return _.sample(e);
}

function pushes(n) {
  for(var i = 0; i< office[n].workers.length; i++) {
    _.set(office[n], "workers["+i+"].opinion", pickUp(opinions));
  }
}

for (var i = 0; i < office.length; i++) {
  pushes(i);
  console.log(office[i])
}
