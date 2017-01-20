var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function pusher (){
  var emptyArray =[];
 var tenEmployee = _.times(10, function (){
    emptyArray.push(_.sample(opinions));
 });
 return emptyArray;
}


function survey () {
  var bigAr = [];
  _.times(5, function(){
    bigAr.push(pusher());
  });
return bigAr;
}
console.log(survey());
//this is just the worst
