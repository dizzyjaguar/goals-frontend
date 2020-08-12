import request from 'superagent';

// export const getTodoList = () => {
//   return request.get('http://localhost:7890/api/v1/todos')
// };

export const getTodoById = (_id) => {
  return request.get(`${process.env.API_URL}/todos/${_id}`)
    .then(res => res.body)
}; 

export const fetchTodos = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/todos`)
    .then(res => res.json())
};

export const postTodo = (newTodo) => {
  return request.post(`${process.env.REACT_APP_API_URL}/todos`, newTodo)
    .then(res => res.body)
}

export const patchTodo = (todo, updatedTodo) => {
  return request.patch(`${process.env.REACT_APP_API_URL}/todos/${todo._id}`, updatedTodo)
    .then(res => res.body)
}

export const deleteTodoById = (todo) => {
  return request.delete(`${process.env.REACT_APP_API_URL}/todos/${todo._id}`)
    .then(res => res.body)
}