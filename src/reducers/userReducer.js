import { SET_USER_GOALS } from '../actions/goalActions';
import { SET_USER_STARS, CREATE_STAR, DELETE_STAR } from '../actions/starActions';

const intitialState = {
    completedGoals: [],
    currentGoals: [],
    createdGoals: [],
    starredGoals: [],
};

export default function reducer(state = intitialState, action) {
  switch(action.type) {
    case SET_USER_STARS:
      return {
        ...state, starredGoals: action.payload
      }
    case SET_USER_GOALS:
      return {
        ...state, createdGoals: action.payload
      }
    case CREATE_STAR:
      return {
        ...state, starredGoals: [...state.starredGoals, action.payload]
      }
    case DELETE_STAR:
      return {
        ...state, starredGoals: state.starredGoals.filter(star => star._id !== action.payload._id)
      }
    default:
      return state;
  }
}
