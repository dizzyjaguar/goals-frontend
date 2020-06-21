import request from 'superagent';

export const getTodoList = () => {
  return request.get('http://localhost:7890/api/v1/todos')
};

export const getTodoById = (_id) => {
  return request.get(`http://localhost:7890/api/v1/todos/${_id}`)
}; 

export const fetchTodos = () => {
  return fetch('http://localhost:7890/api/v1/todos')
    .then(res => res.json())
};

export const postTodo = (newTodo) => {
  return request.post('http://localhost:7890/api/v1/todos', newTodo)
    .then(res => res.body)
}