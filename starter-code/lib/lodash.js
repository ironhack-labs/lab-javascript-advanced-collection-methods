var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];
//select random opinion
function opinionSelect(){
  return _.sample(opinions);
}
//10 opinions pushed into new array
function pushOpinion(array){
    return _.times(10, opinionSelect);
}
//introducing the 5 department
function timesFive(){
  return _.times(5, pushOpinion);
}
console.log(timesFive());
