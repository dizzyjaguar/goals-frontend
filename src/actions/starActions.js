import { postStarRequest, getAllStarsRequest, deleteStarRequest } from '../services/Stars/starServices';


export const SET_USER_STARS = 'SET_USER_STARS';
export const setUserStars = () => dispatch => {
  return getAllStarsRequest()
    .then(res => {
      dispatch({ type: SET_USER_STARS, payload: res });
    });
};


export const CREATE_STAR = 'CREATE_STAR';
export const createStarRedux = (star) => dispatch => {
  return postStarRequest(star)
    .then(res => {
      dispatch({ type: CREATE_STAR, payload: res });
    });
};

export const DELETE_STAR = 'DELETE_STAR';
export const deleteStarRedux = (star) => dispatch => {
  return deleteStarRequest(star)
    .then(res => {
      dispatch({ type: DELETE_STAR, payload: res })
    });
};