var isPlaindrome = function(aString) {
  var result = true;
  var re = / /gi;
  aString = aString.toLowerCase().replace(re,'');

  for (var i = 0; i < aString.length / 2; i++) {
    if (aString[i] !== aString[aString.length - i - 1]) {
      result = false
      break;
    }
  }
  return result;
}

console.log('madam Im Adam ' + isPlaindrome('madam Im Adam'));
console.log('hello goodbye ' + isPlaindrome('hello goodbye '));
