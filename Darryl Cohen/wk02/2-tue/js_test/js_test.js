// JS Variables

var captain = 'Jack'
var phrase = 'Oh ' + captain + ', my ' + captain + '!"'

var souls = 3;
var lifeRafts = 2;

// JS Conditionals
if (souls > lifeRafts) {
  console.log('SOS');
}

// Data Structures - JS Arrays
var weekend = ['Saturday']
weekend.push('Sunday')
weekend.unshift('Friday')
var day = weekend[1];
weekend.shift();
console.log(weekend);

// Data Structures - JS Objects
var brain = {
  energyLevel : 10,
}
var energy = brain.energyLevel
brain.dream = 'electric sheep'

// JS Functions
var area = function(width , height) {
  return width * height
}

var myArea = console.log(area(3,4))

Objects are passed by reference.
