import { fetchTodos, postTodo, patchTodo } from '../services/Todos/todoServices';

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

export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodo = (todo, updatedTodo) => dispatch => {
  return patchTodo(todo, updatedTodo)
    .then(res => {
      dispatch({ type: UPDATE_TODO, payload: res });
    });
}