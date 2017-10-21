var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
];

// Sort the people by 'uid'
console.log(_.sortBy(people, 'uid'))
// Group the random words by the lower case version of their first letter
console.log(_.groupBy(words, function(word){
  return word[0].toLowerCase()
}));
// Check to see if all the words have more than 3 characters
var items = _.every(words, function(word){
  return word.length > 3
})
console.log(items);
// Check if some words are over twenty characters long
var items = _.some(words, function(word){
  return word.length > 20
})
console.log(items);
// Get an array of all of the uids in people
var items = _.map(people, function(person){
  return person.uid
})
console.log(items);
// Find the person with the highest uid
var items = _.max(people, function(person){
  return person.uid
})
console.log(items);
// Return an object that says how many even numbers and how many odd numbers there are in numbers
var items = _.countBy(numbers, function(number){
  return number % 2 == 0 ? 'even' : 'odd'
})
console.log(items);
// Get three random numbers out of numbers
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

console.log(_.sample(numbers, 3));

var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// - Create an array of every five numbers between 30 and 101
var items = _.range(30, 101,5)
console.log(items);
// - Turn ` bumpyArr ` into one flat array (no nested arrays)
console.log(_.flatten(bumpyArr));
// - Remove all of the falsey elements in the ` uncompactedArr `
var items = _.compact(uncompactedArr)
console.log(items);
// - Find all of the unique elements in the following arrays - ` [ 1, 25, 100 ] `, ` [ 1, 14, 25 ] ` and ` 24, Infinity, -0 `
console.log(_.uniq([ 1, 25, 100 ] ,  [ 1, 14, 25 ], 24, Infinity, -0));
// - Find the index of the first element in ` numbers ` that is over 7 and is even
console.log(_.findIndex(numbers, function(number){
  return number > 7 && number % 2 == 0
}));
// - Turn ` arrToTransform ` into an object that looks like this - ` { age: NaN, location: undefined } `
console.log(_.object(arrToTransform));
