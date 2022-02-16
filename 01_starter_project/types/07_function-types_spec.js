"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
const printResult = (num) => {
    console.log('Result: ' + num);
};
printResult(add(5, 12));
console.log(printResult(5));
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
