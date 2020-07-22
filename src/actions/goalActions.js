import { getAllGlobalGoalsRequest } from '../services/Goals/goalServices';

export const SET_GLOBAL_GOALS = 'SET_GLOBAL_GOALS';
export const setGlobalGoalsRedux = () => dispatch => {
  return getAllGlobalGoalsRequest()
    .then(res => {
      dispatch({ type: SET_GLOBAL_GOALS, payload: res });
    });
};