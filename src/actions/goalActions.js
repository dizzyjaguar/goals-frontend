import { getAllGlobalGoalsRequest, getGoalByIdRequest, deleteGoalRequest, postGoalRequest, getAllGoalsByUserRequest, completeGoalRequest } from '../services/Goals/goalServices';

export const SET_GLOBAL_GOALS = 'SET_GLOBAL_GOALS';
export const setGlobalGoalsRedux = () => dispatch => {
  return getAllGlobalGoalsRequest()
    .then(res => {
      dispatch({ type: SET_GLOBAL_GOALS, payload: res });
    });
};

export const SET_GLOBAL_GOAL = 'SET_GLOBAL_GOAL';
export const setGlobalGoalRedux = (id) => dispatch => {
  return getGoalByIdRequest(id)
    .then(res => {
      dispatch({ type: SET_GLOBAL_GOAL, payload: res });
    });
};

export const SET_USER_GOALS = 'SET_USER_GOALS';
export const setUserGoalsRedux = (user) => dispatch => {
  return getAllGoalsByUserRequest(user)
    .then(res => {
      dispatch({ type: SET_USER_GOALS, payload: res });
    });
};

export const CREATE_GLOBAL_GOAL = 'CREATE_GLOBAL_GOAL';
export const createGlobalGoalRedux = (newGoal) => dispatch => {
  return postGoalRequest(newGoal)
    .then(res => {
      dispatch({ type: CREATE_GLOBAL_GOAL, payload: res });
    });
};

// this will have to get changed at somepoint so that only creators of the goal can delete it or something along those lines, but 
export const DELETE_GOAL = 'DELETE_GOAL';
export const deleteGoalRedux = (goal) => dispatch => {
  return deleteGoalRequest(goal)
    .then(res => {
      dispatch({ type: DELETE_GOAL, payload: res });
    });
};

export const COMPLETE_GOAL = 'COMPLETE_GOAL';
export const completeGoalRedux = (user, goal) => dispatch => {
  return completeGoalRequest(user, goal)
    .then(res => {
      dispatch({ type: COMPLETE_GOAL, payload: res.completedGoals })
    })
}