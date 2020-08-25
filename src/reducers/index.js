import { combineReducers } from 'redux';
import todos from './todoReducer';
import auth from './authReducer';
import user from './userReducer';
import goals from './goalReducer';
import insights from './insightReducer';

export default combineReducers({
  todos: todos,
  auth: auth,
  user: user,
  goals: goals,
  insights: insights
})