//ITEARTION 1
var opinions = [ "This is the best job ever",
                 "Satisfied",
                 "At least I get paid",
                 "I'm looking for another job",
                 "I don't want to answer"];

function randomSelect (array) {
  	var random = Math.floor(Math.random() * array.length);
	return array[random];
}

function createNewArray() {
  var departments = [];
  for(var ix = 0; ix < 10; ix++) {
    opinion = randomSelect(opinions);
    departments.push(opinion);
  }
  return departments;
}

function createDepartments() {
  var office = [];
  for(var yx = 0; yx < 5; yx++) {
    dep = createNewArray();
    office.push(dep);
  }
  return office;
}

console.log(createDepartments());

//ITERATION 2
var matrix = birthdays.reduce(function(acc, item, index){
  var newArray = [];
  if (index % 2 === 0) {
    newArray.push(birthdays[index]);
    newArray.push(birthdays[index+1]);
    acc.push(newArray);
  }
  return acc;
}, []);

console.log(matrix);

//ITERATION 3
//Different characters
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
  for(var i = 0; i < password.length; i++) {
    if(password.indexOf(password[i]) !== i){
      return false;
    }
  }
  return true;
};

console.log(noRepeatChar(goodPsswd));
console.log(noRepeatChar(badPsswd));

//ITERATION 4
