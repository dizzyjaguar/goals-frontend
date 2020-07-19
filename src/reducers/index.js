import { combineReducers } from 'redux';
import todos from './todoReducer';
import auth from './authReducer';

export default combineReducers({
  todos: todos,
  auth: auth,
})