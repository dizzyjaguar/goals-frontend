import request from 'superagent';

// export const getTodoList = () => {
//   return request.get('http://localhost:7890/api/v1/todos')
// };

export const getTodoById = (_id) => {
  return request.get(`http://localhost:7890/api/v1/todos/${_id}`)
    .then(res => res.body)
}; 

export const fetchTodos = () => {
  return fetch('http://localhost:7890/api/v1/todos')
    .then(res => res.json())
};

export const postTodo = (newTodo) => {
  return request.post('http://localhost:7890/api/v1/todos', newTodo)
    .then(res => res.body)
}

export const patchTodo = (todo, updatedTodo) => {
  return request.patch(`http://localhost:7890/api/v1/todos/${todo._id}`, updatedTodo)
    .then(res => res.body)
}

export const deleteTodoById = (todo) => {
  return request.delete(`http://localhost:7890/api/v1/todos/${todo._id}`)
    .then(res => res.body)
}