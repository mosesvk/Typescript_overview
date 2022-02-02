const add = (a: number, b: number): number => {
  return a + b
}

const subtract = (a: number, b: number): number => {
  return a - b
}

// we use void to say there will NOT be a return value in the function
const logger = (message: string): void => {
  console.log(message)
}