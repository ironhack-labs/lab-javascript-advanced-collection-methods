
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function randomOpinion() {
  return _.sample(opinions);

}

// Function pushes ten random opinions into an empty array.


 function pushOpinions(){
   var tenOpinions = [];                    //A local variable in order to update the array each time we push.
    _.times(10, function(){                 //Using lodash, returning the pushing function ten times.
     tenOpinions.push(randomOpinion());     //It was necessary to create a callback function in the lodash times
   });
   return tenOpinions;                                     //method to actually push.
 }


// Create another function that pushes the 10-items-array into another array.
// You will need to do this five times to create the five departments. At the end you
//  will have something like the function below:

function pushAllOpinions () {
  var finalArray = [];                        //This variable was global, which is why it wasn't
   _.times(5, function(){                     //creating a new array.  By including it in the function,
    finalArray.push(pushOpinions());          //we are able to create a new set each time we pushed it.
  });
  return finalArray;
}

// console.log(pushAllOpinions());
