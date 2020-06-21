import { fetchTodos, postTodo } from '../services/Todos/todoServices';

export const SET_TODOS = 'SET_TODOS';
export const setTodosRedux = () => dispatch => {
  return fetchTodos()
    .then(res => {
      dispatch({ type: SET_TODOS, payload: res });
    });
}

export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (newTodo) => dispatch => {
  return postTodo(newTodo)
    .then(res => {
      dispatch({ type: CREATE_TODO, payload: res });
    });
}