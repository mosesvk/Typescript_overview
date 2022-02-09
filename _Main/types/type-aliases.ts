// This helps to avoid unnecessary repetition and manage types
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; 


// old code 
  function greet(user: { name: string; age: number }) {
    console.log('Hi, I am ' + user.name);
  }
  greet(u1);
  
  function isOlder(user: { name: string; age: number }, checkAge: number) {
    console.log(checkAge > user.age)
  }
  isOlder(u1, 30)

// NEW code 
  type newUser = { name: string; age: number };
  
  const newGreet = (user: newUser) => {
    console.log('Hi, I am ' + user.name);
  }
  newGreet(u1)
  
  const newIsOlder = (user: newUser, checkAge: number) => {
    console.log(checkAge > user.age)
  }
  newIsOlder(u1, 35)


// Full Example 

type Combined = number | string
type conversionString = 'as-number' | 'as-text'
// These are the type aliases

const combine = (
  input1: Combined,
  input2: Combined,
  resultConversion: conversionString
) => {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + ' & ' + input2.toString();
  }
  return result;

  // if (resultConversion === 'as-number') {
  //   return +result
  // } else {
  //   return result.toString()
  // }
};

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '27', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
