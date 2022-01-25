import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// interfaces are used to DEFINE the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo;

  const ID = todo.id
  const title = todo.title;
  const finished = todo.completed

  console.log(`
    The Todo with ID ${ID}
    Has a title  of: ${title}
    Is it finished? ${finished}
  `)
})