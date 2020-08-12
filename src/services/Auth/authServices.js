import request from 'superagent';
//consider adding in Email field in the User schema on the backend
export const signupRequest = (newUser) => {
  return request.post(`${process.env.REACT_APP_API_URL}/auth/signup`, newUser)
    .then(res => res.body)
};

export const loginRequest = (user) => {
  return request.post(`${process.env.REACT_APP_API_URL}/auth/login`, user)
  .withCredentials()
    .then(res => res.body)
};

export const verifyRequest = () => {
  return request.get(`${process.env.REACT_APP_API_URL}/auth/verify`)
  .withCredentials()
    .then(res => res.body)
};

export const logoutRequest = () => {
  return request.get(`${process.env.REACT_APP_API_URL}/auth/logout`)
    .then(res => res.body)
};