var goodPsswd = '1234567890'
var badPsswd = '1123as456'


var noRepeatChar = function (a) {
  //your code goes here
  var pass = a.split('')
  return pass
}

var compareNumberPass = function (a) {
	for(var i = 0; i < a.length; i++) {
		for(var j = i + 1; j < a.length; j++) {
			if(a[i] === a[j]) {
				return 'Error'
			} else {
				return 'Correct'
			}
		}
	}
}

var compareCharacterPass = function (a) {
	for(var i = 0; i < a.length; i++) {
			if(a[i] !== '[a-zA-Z]') {
				return 'Error'
			} else {
				return 'Correcto'
			}
	}
}

var trimPass = function (a) {
  var trimAllPass = _.take(a, 10)
  return trimAllPass
}

console.log(compareNumberPass(noRepeatChar(goodPsswd)))

console.log(compareCharacterPass(noRepeatChar(badPsswd)))

console.log(trimPass(noRepeatChar('123456789101112')))
