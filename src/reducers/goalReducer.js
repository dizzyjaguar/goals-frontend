import { SET_GLOBAL_GOALS, SET_GLOBAL_GOAL, DELETE_GOAL, CREATE_GLOBAL_GOAL } from '../actions/goalActions';

const intitialState = {
  globalGoals: [],
  userGoals: [],
  goal: {},
  star: {}
};

export default function reducer(state = intitialState, action) {
  switch(action.type) {
    case SET_GLOBAL_GOALS:
      return {
        ...state, globalGoals: action.payload
      }
    case SET_GLOBAL_GOAL:
      return {
        ...state, goal: action.payload
      }
    case CREATE_GLOBAL_GOAL:
      return {
        ...state, globalGoals: [...state.globalGoals, action.payload]
      }
    case DELETE_GOAL:
      return {
        ...state, globalGoals: state.globalGoals.filter(goal => goal._id !== action.payload._id)
      }
    default:
      return state;
  }
}