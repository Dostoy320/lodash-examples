var _ = require('lodash');

//Super simple example:

var bunchOfNumbers = [2, 4, 2, 56, 3, 4, 34, 56];

var uniqueNumbers = _.uniq(bunchOfNumbers);

console.log(uniqueNumbers);


// Comparing a property of an object:

var sandwiches = [
  { 'type': 'submarine', 'length': 12},
  { 'type': 'burger', 'length': 5},
  { 'type': 'submarine', 'length': 200},
  { 'type': 'open-face', 'length': 8}
];

var uniqueSandwiches = _.uniq(sandwiches, 'type');

console.log(uniqueSandwiches);

