var _ = require('lodash');

var myEach = {
    first: 1,
    second: 2,
    third: 3
};

var result = _.each(myEach, function(item, key){
    item = item + 1;
    console.log("New value is " + item);

    // Update values in the myEach object
    myEach[key] = item;
});

console.log("Updated object:");
console.log(result);

