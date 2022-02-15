"use strict";
const person = {
    name: 'Mo Money',
    age: 28,
    hobbies: ['Sports', 'Piano'],
    role: [2, 'author']
};
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
