import { fetchTodos, postTodo, patchTodo, deleteTodoById, getTodoById } from '../services/Todos/todoServices';
import { getTodos } from '../selectors/todoSelector';

export const SET_TODOS = 'SET_TODOS';
export const setTodosRedux = () => dispatch => {
  return fetchTodos()
    .then(res => {
      dispatch({ type: SET_TODOS, payload: res });
    });
}

export const SET_TODO = 'SET_TODO';
export const setTodo = (id) => dispatch => {
  return getTodoById(id)
    .then(res => {
      dispatch({ type: SET_TODO, payload: res });
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

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (todo) => dispatch => {
  return deleteTodoById(todo)
    .then(res => {
      dispatch({ type: DELETE_TODO, payload: res })
    });
}