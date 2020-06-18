import { getTodoList, fetchTodos } from '../services/Todos/todoServices';

export const SET_TODOS = 'SET_TODOS';
export const setTodos = () => dispatch => {
  return fetchTodos()
    .then(res => {
      dispatch({ type: SET_TODOS, payload: res });
    });
}