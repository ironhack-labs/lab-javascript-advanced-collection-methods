var isUnique = function (password) {
    if (_.uniq(password).length === password.length) {
        return 'good password';
    } else {
        return 'bad password';
    }
}

var hasLetters = function (password) {
    var arrPassword = password.split('');
    var result = _.filter(arrPassword, function (item) {
    var patt = new RegExp(/^[0-9]+$/);
    return patt.test(item);
});
 
if (JSON.stringify(arrPassword)==JSON.stringify(result)) {
    return 'good password';
} else {
    return 'bad password';
}
}

var tenDigitsOnly = function(password) {
    return _.chunk(password, 10)[0].join();
}


console.log(isUnique('1234567890'));
console.log(isUnique('123456700890'));
console.log(hasLetters('12345678'));
console.log(hasLetters('1234567a8'));
console.log(tenDigitsOnly('1234567810123456789'));
