import request from 'superagent';

export const getTodoList = () => {
  return request.get('http://localhost:7890/api/v1/todos')
};

export const getTodoById = (_id) => {
  return request.get(`http://localhost:7890/api/v1/todos/${_id}`)
}; 
