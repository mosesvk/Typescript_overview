const person = {
  name: 'Mo Money',
  age: 28,
  hobbies: ['Sports', 'Piano']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports']


console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}