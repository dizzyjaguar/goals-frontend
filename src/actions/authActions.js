import { signupRequest, logoutRequest } from '../services/Auth/authServices';

export const SET_USER = 'SET_USER';
export const signupRedux = (newUser) => dispatch => {
  return signupRequest(newUser)
    .then(res => {
      dispatch({ type: SET_USER, payload: res });
    });
}

export const LOGOUT = 'LOGOUT';
export const logoutRedux = () => dispatch => {
  return logoutRequest()
    .then(() => {
      dispatch({ type: SET_USER, payload: null })
    })
    .then(() => {
      dispatch({ type: LOGOUT })
    });
}