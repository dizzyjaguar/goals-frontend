import { signupRequest, logoutRequest, loginRequest, verifyRequest } from '../services/Auth/authServices';

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
export const verifyRedux = (user) => dispatch => {
  return verifyRequest(user)
    .then(verifiedUser => {
      dispatch({
        type: SET_USER,
        payload: verifiedUser
      });
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