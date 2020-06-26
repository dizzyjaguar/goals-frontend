import { SET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todosActions';

const initialState = {
  todos: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_TODOS:
      return {
        ...state, todos: action.payload
      }
    case CREATE_TODO:
      return {
        ...state, todos: [...state.todos, action.payload]
      }
    case UPDATE_TODO:
      return {
        ...state, todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      return {
        ...state, todos: state.todos.filter(todo => todo._id !== action.payload._id)
      }
    default:
      return state;
  }
}