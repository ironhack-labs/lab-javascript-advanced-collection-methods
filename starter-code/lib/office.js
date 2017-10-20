
//console.log(office);

var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
               "I'm looking for another job",
                 "I don't want to answer"];




function random(array){
return (array[Math.floor(Math.random() * array.length)]);
}


function makeDepart(){
var dept = [];
for( var i = 0 ; i < 10; i ++){
  dept.push(random(opinions));
}
return dept;
}


function makeOffice(){
  var office = [];
  for (var i = 0 ; i < 5 ; i++){
    office.push(makeDepart());
  }
  return office;
}
office = makeOffice();
console.log(office);
// function makeOffice(office){
// for (var i = 0; i < 5; i++) {
//   office[i] = { office: i +1,};
// }
// office.forEach(function(review){
//   review.opinions.push.makeDepart(dept);
// });
// return office;
// }
//makeOffice(office);
//console.log(office);


// office.map(function(review){
//   review.push(opinions[random(opinions.length)]);
// });
