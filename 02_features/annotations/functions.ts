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


const throwError = (message: string): string => {

  if (!message){
    throw new Error(message) 
  }

  return message
}


// Destructuring
  const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
  }

  const logWeather = (todaysWeather: {date: Date, weather: string}): void => {
    console.log(todaysWeather.date, todaysWeather.weather)
  }
  // Now Let's try to destructure the above function
  const newLogWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date, weather)
  }

  logWeather(todaysWeather)
  newLogWeather(todaysWeather)