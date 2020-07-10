import request from 'superagent';

export const signup = (user) => {
  return request.post('http://localhost:7890/api/v1/auth/signup')
};

export const login = () => {

}