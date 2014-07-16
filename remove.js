var _ = require('lodash');

var sandwiches = [
  { 'type': 'submarine', 'length': 12},
  { 'type': 'burger', 'length': 5},
  { 'type': 'submarine', 'length': 200},
  { 'type': 'open-face', 'length': 8}
];

var shortSandwiches = _.remove(sandwiches, function(sandwich){
  return sandwich.length < 10;
});

console.log("Your short sandwich options:");
for (sandwich in shortSandwiches) {
  console.log(shortSandwiches[sandwich].type);
}
