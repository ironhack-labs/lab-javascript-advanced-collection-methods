  var opinions = [ "This is the best job ever",
                  "Satisfied",
                  "At least I get paid",
                  "I'm looking for another job",
                  "I don't want to answer"];

  function randomOpinions(){
      return _.sample(opinions);
 }

    var personas = [];
    var departamentos = [
    {nombre: "Contabilidad", Empleados:[]}, 
    {nombre: "Ventas", Empleados:[]}, 
    {nombre: "AtenciónAlCliente", Empleados:[]},
    {nombre: "Finanzas", Empleados:[]}, 
    {nombre: "Mercadotecnia", Empleados:[]}
    ];

    for (var i = 0; i < departamentos.length;i++){
      for (var j=0;j <10;j++){
        departamentos[i].Empleados.push(randomOpinions());
      }
    }

    var employeeSatisfaction = function () {
  // Steps 2, 3 and 4 here
  return departamentos;
};

    console.log(employeeSatisfaction())
    // --------------------------------------------------------------------
      function emparejar(array){

        var resultado = [];
        for (var i = 0; i < array.length; i+=2){
         resultado.push([array[i],array[i +1]]);
        }
        return resultado;
      };

      console.log(emparejar(birthdays));

      console.log(_.chunk(birthdays,2));


// --------------------------------------------------------------------------------

var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
   if (_.sortedUniqBy(password).length === password.length) {
    return password;
   } else {
    return "error";
   }

};

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));


var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function (password) {
  if (_.isNaN(password/2) && !password==0){
    console.log("Error, only numbers!!");
    return "error";
  } else {
    console.log("Good password!!");
    return password;
  }
  
 //your code goes here
}
console.log(onlyNumbers(goodPsswd));
console.log(onlyNumbers(badPsswd));




var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
  if (_.size(password) > 10) {
    password = password.substr(0,10);
  } 

  return password;

  
 //your code goes here
}
console.log(trimPassword(badPsswd));




var novemberArtists = function () {
  //your code
};
//Remember to execute the function to actually assing the value to the var.
//Artists like to repeat: Get the artist who recorded the most times in Abbey Road.

var bestArtist = function () {
  //your code
};
//Remember to execute the function to actually assing the value to the var.
//The Beatles and Abbey Road: When did the four of Liverpool recorded their last song in Abbey Road Studios?

var lastBeatlesSong = function () {
  //your code
};
//Remember to execute the function to actually assing the value to the var.
//Sixties crazyness: The sixties were a crazy decade. Could you retrieve the last song it was recorded in Abbey Road Studios in the decade of 1960's?

var sixtiesSong = function () {
  
  //your code
};
//Remember to execute the function to actually assing the value to the var.


