"use strict";
const u1 = { name: 'Max', age: 30 };
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
greet(u1);
function isOlder(user, checkAge) {
    console.log(checkAge > user.age);
}
isOlder(u1, 30);
const newGreet = (user) => {
    console.log('Hi, I am ' + user.name);
};
newGreet(u1);
const newIsOlder = (user, checkAge) => {
    console.log(checkAge > user.age);
};
newIsOlder(u1, 35);
const combine = (input1, input2, resultConversion) => {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + ' & ' + input2.toString();
    }
    return result;
};
const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);
const combineStringAges = combine('30', '27', 'as-number');
console.log(combineStringAges);
const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
