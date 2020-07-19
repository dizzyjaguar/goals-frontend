import { signupRequest, logoutRequest, loginRequest } from '../services/Auth/authServices';

export const SET_USER = 'SET_USER';
export const signupRedux = (newUser) => dispatch => {
  return signupRequest(newUser)
    .then(res => {
      dispatch({ type: SET_USER, payload: res });
    });
}

export const LOGIN = 'LOGIN';
export const loginRedux = (user) => dispatch => {
  return loginRequest(user)
    .then(res => {
      dispatch({ type: SET_USER, payload: res })
    });
}

export const VERIFY = 'VERIFY';
//create verify action which is for peristing the user

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