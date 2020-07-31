import { combineReducers } from 'redux';
import todos from './todoReducer';
import auth from './authReducer';
import user from './userReducer';
import goals from './goalReducer';

export default combineReducers({
  todos: todos,
  auth: auth,
  user: user,
  goals: goals
})