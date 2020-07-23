import { SET_GLOBAL_GOALS, SET_GLOBAL_GOAL } from '../actions/goalActions';

const intitialState = {
  globalGoals: [],
  userGoals: [],
  goal: {}
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
    default:
      return state;
  }
}