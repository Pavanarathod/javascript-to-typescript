"use strict";
function add(one = 4, two, age) {
    return one + two;
}
const number1 = 5;
const number2 = 2;
const age = 5;
const result = add(number1, number2, true);
console.log(result);
