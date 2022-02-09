// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum assigns labels to numbers
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
} // {0, 1, 2}

const person = {
  name: 'Mo Money',
  age: 28,
  hobbies: ['Sports', 'Piano'],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log('is admin');
}
