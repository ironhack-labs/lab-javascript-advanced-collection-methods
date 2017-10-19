var _ = require('lodash');


// Different characters
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
    var toArray = password.split("");
    return _.isEqual(toArray, _.uniq(toArray));
};

noRepeatChar(goodPsswd);
console.log(noRepeatChar(goodPsswd));
noRepeatChar(badPsswd);
console.log(noRepeatChar(badPsswd));


// Only numbers
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function(password) {
    var toArray = password.split("");
    var onlyNumbers = _.filter(toArray, function(element) {
        if (_.isNumber(parseInt(element)) && !isNaN(parseInt(element))) {
            return element;
        }
    });
    if (_.isEqual(toArray, onlyNumbers)) {
        return "Valid";
    } else {
        return "Error";
    }
};

onlyNumbers(goodPsswd);
console.log(onlyNumbers(goodPsswd));
onlyNumbers(badPsswd);
console.log(onlyNumbers(badPsswd));


// Ten digits only
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
    return password.substring(0, 10);
};

trimPassword(goodPsswd);
console.log(trimPassword(goodPsswd));
trimPassword(badPsswd);
console.log(trimPassword(badPsswd));
