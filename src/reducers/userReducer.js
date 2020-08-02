import { SET_USER_STARS } from '../actions/starActions';

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
    default:
      return state;
  }
}