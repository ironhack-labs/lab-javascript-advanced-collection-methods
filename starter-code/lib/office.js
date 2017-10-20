console.log("js connected");


var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

//var rand = myArray[Math.floor(Math.random() * myArray.length)];

function randomOpinion(){
  var rand=opinions[Math.floor(Math.random() * opinions.length)];
  return rand;
}




// Create a function that makes an array of 10 survey answers for one department. It should define an empty array and call the function from step 2 to add a randomly selected survey response into the empty array. You will need to repeat this procedure 10 times so that the array goes from empty to having 10 randomly selected survey answers.

function oneDepartment(){

var arrayOfTen=[];

for(var i=0;i<10;i++)
{
 arrayOfTen.push(randomOpinion());
}
return arrayOfTen;

}


// Create a third function that pushes makes the final array for the survey answers of all 5 of the departments. It should define an empty array and call the function from step 3 to add a 10-items department array into the empty array. You will need to repeat this procedure 5 times so that the array goes from empty to having 5 department survey answer arrays.


function allDepartment(){
  var finalArray=[];


  for(var j=0;j<=4;j++)
  {

    finalArray.push(oneDepartment());

  }

  return finalArray;
}

allDepartment();
