const add = (n1: number, n2: number) => {
  return n1 + n2
}

const printResult = (num: number) => {
  console.log('Result: ' + num)
  // Since there is no Return, this function has the return type of VOID, it will show once you hover over printResult
}

printResult(add(5, 12)) // Result: 17

