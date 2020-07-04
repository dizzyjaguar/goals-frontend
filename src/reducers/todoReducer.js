import { SET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO, SET_TODO } from '../actions/todosActions';

const initialState = {
  todos: [],
  todo: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_TODOS:
      return {
        ...state, todos: action.payload
      }
    case SET_TODO:
      return {
        ...state, todo: action.payload
      }
    case CREATE_TODO:
      return {
        ...state, todos: [...state.todos, action.payload]
      }
    case UPDATE_TODO:
      return {
        ...state, todos: state.todos.map(todo => {
          if(action.payload._id === todo._id) return action.payload;
          return todo;
        })
      }
    case DELETE_TODO:
      return {
        ...state, todos: state.todos.filter(todo => todo._id !== action.payload._id)
      }
    default:
      return state;
  }
}