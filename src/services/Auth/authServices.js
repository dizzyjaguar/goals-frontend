import request from 'superagent';
//consider adding in Email field in the User schema on the backend
export const signupRequest = (newUser) => {
  return request.post('http://localhost:7890/api/v1/auth/signup', newUser)
    .then(res => res.body)
};

export const loginRequest = (user) => {
  return request.post('http://localhost:7890/api/v1/auth/login', user)
    .then(res => res.body)
}

export const logoutRequest = () => {
  return request.get('http://localhost:7890/api/v1/auth/logout')
    .then(res => res.body)
}