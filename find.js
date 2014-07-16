var _ = require('lodash');

var sandwiches = [
  { 'type': 'submarine', 'length': 12},
  { 'type': 'burger', 'length': 5},
  { 'type': 'submarine', 'length': 200},
  { 'type': 'open-face', 'length': 8}
];

var firstChoice = _.find(sandwiches, function (sandwich) {
  return sandwich.length > 5;
});

var lastChoice = _.findLast(sandwiches, function (sandwich) {
  return sandwich.length > 5;
});

console.log(firstChoice);
console.log(lastChoice);

