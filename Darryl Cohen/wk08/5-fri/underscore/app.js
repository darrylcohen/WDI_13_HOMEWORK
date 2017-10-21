var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console
_.each(numbers, function(number){
  console.log(number);
})
// Iterate through numbers and multiply each one of them by 5
console.log(_.map(numbers,  function(number){
  return number * 5
}))
// Iterate through numbers and reduce it by adding them together
var sum = _.reduce(numbers, function(num1, num2){
  return num1 + num2
})
console.log(sum);
// Get an array of all of the people in people that have the username "E"
arr = []
_.each(people,function(person){
  if (person.username == 'E') {
    arr.push(person)
  }
})
console.log(arr);
// Find the first object in people that has the id of 3
var item = _.find(people, function(person){
  return person.id == 3
})
console.log(item);
// Find the first person who has an age of less than 50
var item = _.find(people, function(person){
  return person.age < 50
})
console.log(item);
// Get an array of all of the people with an age of over 60
var items = _.filter(people, function(person) {
  return person.age > 60
})
console.log(items);
// Remove all of the people with an age less than 40
var items = _.reject(people, function(person) {
  return person.age < 40
})
console.log(items);
