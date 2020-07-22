import { combineReducers } from 'redux';
import todos from './todoReducer';
import auth from './authReducer';
import goals from './goalReducer';

export default combineReducers({
  todos: todos,
  auth: auth,
  goals: goals
})