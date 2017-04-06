const _ = require('lodash');
const Birthdays = require('./lib/harryPotter');
const AbbeyRoad = require('./lib/abbeyRoad');

/////////////////////////////////////////
/////////////////////////////////////////
// Iteration 1 - The Office /////////////
/////////////////////////////////////////
/////////////////////////////////////////

const opinions = [
    "This is the best job ever",
    "Satisfied",
    "At least I get paid",
    "I'm looking for another job",
    "I don't want to answer"
    ];

const departments = [0,1,2,3,4,5,6,7,8,9];

let employeeOpinions = [];

// Pick a random number for use in function randomOpinion
function randomNumber() {
    return _.random(0, opinions.length-1);
}

// Generate a random opinion
function randomOpinion() {
    return opinions[randomNumber()]
}

// By using _.sample generating an random opinion is very easy.
_.sample(opinions);

// Add random opinions to the 5x10 array (5 employees in 10 departments)
function addOpinion(n) {
    return _.map(opinions, randomOpinion)
}

// Generating 10 random opinions with the _.times method.

const tenOpinions = _.times(10, randomOpinion);
//console.log(tenOpinions);

// 5.
const employeeSatisfaction = () => _.map(departments, addOpinion);

//console.log(employeeSatisfaction());


////////////////////////////////////////////
///////////////////////////////////////////
// Iteration 2 - Harry Potter's Birthdays/
//////////////////////////////////////////
/////////////////////////////////////////

//console.log(Birthdays);

// 1.

// Create the Character's Array
// JS Vanilla & ES5 Style.
const characters = Birthdays.filter(function(number, index){
  return index % 2 === 0;
});

// Lodash & ES6 Style.
const characters2 = _.filter(Birthdays, (number, index) => index % 2 === 0);
// console.log(characters2);

// Create the Birthday's Array
// JS Vanilla & ES5 Style.
const birthdays = Birthdays.filter(function(number, index){
  return index % 2 !== 0;
});

// Lodash & ES6 Style.
const birthdays2 = _.filter(Birthdays, (number, index) => index % 2 !== 0);
// console.log(birthdays2);

// Join the two above arrays into one
// JS Vanilla & ES5 Style.
const charBirth = characters.map(function(v, i) {
    return [v, birthdays[i]];
});

// Lodash & ES6 Style.
const charBirth2 = _.map(characters2, (v,i) => [v, birthdays2[i]]);
// console.log(charBirth2);

// 2.

const moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];

const moreBirthdaysChunck = _.chunk(moreBirthdays, 2);
// console.log(moreBirthdays2);

// 3.
const final = _.concat(charBirth2, moreBirthdaysChunck);
// console.log(final);


////////////////////////////////////////////
///////////////////////////////////////////
// Iteration 3 - The Password Problem ////
/////////////////////////////////////////
////////////////////////////////////////

// Different characters:
const goodPsswd1 = "1234567890";
const badPsswd1 = "1123456";
const noRepeatChar = (password) => {
    const array         = password.split('');
    const uniqueArray   = _.uniq(array);
    return array.length === uniqueArray.length ? 'All characters where unique!' : 'Not all characters were unique! Please try again';
    }

console.log("Test - Different Characters(goodPsswd1): ", noRepeatChar(goodPsswd1));
console.log("Test - Different Characters(badPsswd1): ", noRepeatChar(badPsswd1));


// Only numbers

// JS Vanilla & ES6

const goodPsswd2 = "1234567890";
const badPsswd2 = "1a234567890";
const onlyNumbers2 = (password) => {
    const reg = /^\d+$/;
    return reg.test(password);
}
// console.log(onlyNumbers(goodPsswd4));
//console.log(onlyNumbers(badPsswd4));

const onlyNumbers3 = (password) => {
    return _.toNumber(password) ? "The password is ok" : "Your password is not OK";
}
console.log("Test - Check a OK Password (goodPsswd2): ", onlyNumbers3(goodPsswd2));
console.log("Test - Check a NOK Password (badPsswd2): ", onlyNumbers3(badPsswd2));

// Ten digits only
const goodPsswd = "1234567890";
const badPsswd = "12345678901234567890";
const trimPassword = (password) => _.truncate(password, { 'length': 10, 'omission': '' });
console.log("Trim Password to 10 digits (badPsswd): ", trimPassword(badPsswd));


//////////////////////////////////////////
/////////////////////////////////////////
// Iteration 4 - Abbey Road Studios /////
////////////////////////////////////////
////////////////////////////////////////

// November looks like a good month:
const novemberArtists = () => {
    monthNovember = _.filter(AbbeyRoad, { 'month': 11 });
    const artists = _.mapValues(monthNovember, 'artist');
    const array = _.map(artists, (value, index) => [value]);
    const counter = _.countBy(array);
    const result  = _(array).uniq().sortBy(item => counter[item]).reverse().value();
    return result[0][0];
};

console.log("Artist who recorded the most on November in Abbey Road: ", novemberArtists());


// Artists like to repeat:
const bestArtist = () => {
    const artistCount = _.countBy(AbbeyRoad, "artist");
    let test = 0;

    for (const key in artistCount) {
        if(test < artistCount[key]) {
            test = artistCount[key];
        }
    }
    return _.findKey(artistCount, _.partial(_.isEqual, test));
};

console.log("Artist who recorded the most times in Abbey Road: ", bestArtist());


// The Beatles and Abbey Road:
const lastBeatlesSong = () => {
    const songs = _.filter(AbbeyRoad, (el) => _.has(el, 'artist') && el.artist === 'The Beatles');
	return _.maxBy(songs, 'year').year;
};

console.log("Last song in Abbey Road Studios: ", lastBeatlesSong());


// Sixties crazyness:
const sixtiesSong = () => {
    const songsDecade1960 = _.filter(AbbeyRoad, (el) => _.has(el, 'year') && el.year < 1970 && el.year > 1959);
	//console.log(songsDecade1960);
    const songsDecade1960Sorted = _.sortBy(songsDecade1960, ['year', 'month']);
    //console.log(songsDecade1960Sorted);
    return _.last(songsDecade1960Sorted).song;
};

console.log("Last song in the 1960's: ", sixtiesSong());
