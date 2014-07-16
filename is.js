var _ = require('lodash');

// .isArguments:
console.log((function() { return _.isArguments(arguments)}()));

// .isArray
var myObviousArray = [1, 2, 4];

console.log(_.isArray(myObviousArray));

// .isBoolean
var yep = true;
var nope = "dog";
console.log(_.isBoolean(yep));
console.log(_.isBoolean(nope));

// .isDate
var myDate = _.isDate(new Date);
console.log(myDate);

// .isElement


// .isEmpty
var myEmptyVariable = {};
console.log(_.isEmpty(myEmptyVariable));

// .isEqual
var oneThing = [
  { 'firstThing': 1},
  { 'secondThing': 2}
];
var anotherThing = [
  { 'firstThing': 1},
  { 'secondThing': 2}
];
console.log(_.isEqual(oneThing, anotherThing));

// .isFinite
console.log(_.isFinite(1000000000000000));
console.log(_.isFinite(""));

// .isFunction
console.log(_.isFunction("dog"));
console.log(_.isFunction(function () { return true }));

// .isNaN
console.log(_.isNaN(NaN));
