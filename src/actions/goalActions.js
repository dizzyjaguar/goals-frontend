import { getAllGlobalGoalsRequest, getGoalByIdRequest } from '../services/Goals/goalServices';

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