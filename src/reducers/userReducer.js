import { LOGOUT, SET_USER } from '../actions/authActions';
import { COMPLETE_GOAL, SET_USER_GOALS } from '../actions/goalActions';
import { SET_USER_STARS, CREATE_STAR, DELETE_STAR } from '../actions/starActions';

const intitialState = {
    completedGoals: [],
    currentGoals: [],
    createdGoals: [],
    starredGoals: [],
};

export default function reducer(state = intitialState, action) {
  switch(action.type) {
    // this my be fine to be replaced just be SET_USER and setting the completed goals array from the database when user is set
    // case SET_COMPLETE_GOALS:
    //   return {
    //     ...state, completedGoals: action.payload
    //   }
    case SET_USER:
      return {
        ...state, completedGoals: action.payload?.completedGoals
      }
    case LOGOUT:
      return {
        ...state, completedGoal: [], currentGoals: [], createdGoals: [], starredGoals: []
      }
    case COMPLETE_GOAL:
      return {
        ...state, completedGoals: [...state.completedGoals, action.payload]
      }
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
