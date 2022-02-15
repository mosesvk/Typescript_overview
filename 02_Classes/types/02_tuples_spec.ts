const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  //this is a Tuple example that allows us to catch errors. Although this will NOT catch a PUSH error on line 14. 
} = {
  name: 'Mo Money',
  age: 28,
  hobbies: ['Sports', 'Piano'],
  role: [2, 'author']
};

// person.role.push('admin');
// person.role[1] = 10
// person.role = [0, 'admin', 'user']

let favoriteActivities: string[];
favoriteActivities = ['Sports']


console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}