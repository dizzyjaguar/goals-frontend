import { SET_USER_STARS, CREATE_STAR, DELETE_STAR } from '../actions/starActions';

const intitialState = {
  userGoals: {
    createdGoals: [],
    completedGoals: [],
    currentGoals: [],
  },
    starredGoals: [],
};

export default function reducer(state = intitialState, action) {
  switch(action.type) {
    case SET_USER_STARS:
      return {
        ...state, starredGoals: action.payload
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
