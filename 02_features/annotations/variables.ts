let apples;
apples = 5
// Type Inference doesn't work above because it is not on the same line

let speed = 'fast';
// This above code is what we will most likely be doing 

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, true, false]

//Classes
class Car {

}
let car: Car = new Car()

// Object Literal
let point: { x: number; y: number } = {
  x: 10, 
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
};

// WHEN TO USE TYPE ANNOTATION
// 1. Function that returns the 'any' type
  const json = '{"x": 10, "y": 20}'
  const coordinates = JSON.parse(json)
  console.log(coordinates); // {x: 10, y: 20}
  coordinates.asdfjafads
  // Typescript will NOT catch this error because we used JSON.parse which only returns a type of ANY. 

  // How do we fix the above problem? 
  const newCoordinates: {x: number; y: number} = JSON.parse(json)
  // newCoordinates.asdfjafads
  // NOW Typescript will catch this error above because we added the type Annotation for the json object 

// 2. Declaring variable in one line then initializing it later
  let words = ['red', 'green', 'blue']
  let foundWord: boolean;
  // let foundWord = false 
  // Would be the best use case which will allow Type inference.
  
  for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
      foundWord = true
    }
  }

// 3. We want a variable to have a type that can't be inferred
  let numbers = [-10, -1, 12]
  let numberAboveZero: boolean | number = false;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      numberAboveZero = numbers[i]
    }
  }







