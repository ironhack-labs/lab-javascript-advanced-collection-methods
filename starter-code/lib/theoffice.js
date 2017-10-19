var opinions = [
    "This is the best job ever",
    "Satisfied",
    "At least I get paid",
    "I'm looking for another job",
    "I don't want to answer"
];
// iteraccion 1
//part 1
function getRandom(e){  
    var random = opinions[Math.floor(Math.random()*opinions.length)]
      return random;
      
  }
  getRandom(); 

//part 2
function getpush (i){
    opinions.push(getRandom());
    console.log (getpush);
    return opinions;
  }
  getpush();
  
   var newOpinions = opinions.map(function getRandom(){
    return opinions(getpush) + getpush();
  })
  
  