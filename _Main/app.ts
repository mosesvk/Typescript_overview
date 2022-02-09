let userInput: unknown;
let userName: string

userInput = 5;
userInput = 'Max'
if (typeof userInput === 'string') {
  userName = userInput
}

// unknown is still a type you will rarely use but it is STILL a better type than <any>


const generateError =(message: string, code: number): never => {
  throw {
    message: message, 
    errorCode: code
  }
}

generateError('An error occured!', 500)

// this function is not only void but a NEVER. Because it will crash and break the script because we are intentionally adding the NEVER