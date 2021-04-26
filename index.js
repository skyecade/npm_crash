const _ = require('lodash');

const numbers = [2,44,56,32,987,232,125689]

_.each(numbers, function(number, i) {
    console.log(number);
});