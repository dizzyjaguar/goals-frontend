import { SET_GLOBAL_GOALS } from '../actions/goalActions';

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
    default:
      return state;
  }
}