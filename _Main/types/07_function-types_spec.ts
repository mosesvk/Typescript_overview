const add = (n1: number, n2: number) => {
  return n1 + n2
}

const printResult = (num: number) => {
  console.log('Result: ' + num)
  // Since there is no Return, this function has the return type of VOID, it will show once you hover over printResult

}

printResult(add(5, 12)) // Result: 17
console.log(printResult(5)) // undefined
  // So if we try to console.log this function, we will get an UNDEFINED because this function does not return anything


let combineValues: (a: number, b: number) => number; 
combineValues = add;
// line 16 is a better and more specific way to code "let combineValues: Function;" because we can actually specify what type of function (along with it's parameters) that we want to return
// We want to specify that this is a Function because if we don't, remember, combineValues will become the <any> type
// Now if we tried to redefine the following below
// combineValues = printResult;
// We would get an error because the function printResult() is a function that does not return a number (it returns void) and only has one parameter



console.log(combineValues(8, 8))