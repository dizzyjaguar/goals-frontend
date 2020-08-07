import { SET_GLOBAL_GOALS, SET_GLOBAL_GOAL, DELETE_GOAL, CREATE_GLOBAL_GOAL } from '../actions/goalActions';
import { CREATE_STAR } from '../actions/starActions';

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
      // this kind of works, but is for somereason firing other actions 
    // case CREATE_STAR:
    //   let theStar = action.payload.goal;
    //   let indexOfStarredGoal = state.globalGoals.findIndex(goal => goal._id === theStar);
    //   let goalThatWasStarred = state.globalGoals[indexOfStarredGoal];
    //   console.log({    
    //     ...state, [goalThatWasStarred.stars]: action.payload
    //   })
    //   return {
           
    //       ...state, 
    //       globalGoals: [...state.globalGoals, {...state.globalGoals[indexOfStarredGoal].stars}, action.payload]
         
    //     // ...state, [goalThatWasStarred.stars]: action.payload 
    //   }  
      
      
    
    
    // // return {
    //   //   ...state, globalGoals: state.globalGoals.map(goal => {
    //   //     if(action.payload.goal === goal._id) {
    //   //       goal.stars.push(action.payload)
    //   //     }
    //   //     return state.globalGoals
    //   //   })
    //   // }
    default:
      return state;
  }
}