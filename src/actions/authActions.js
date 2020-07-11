import { signupRequest } from '../services/Auth/authServices';

export const SET_USER = 'SET_USER';
export const signupRedux = (newUser) => dispatch => {
  return signupRequest(newUser)
    .then(res => {
      dispatch({ type: SET_USER, payload: res });
    });
}