import request from 'superagent';
//consider adding in Email field in the User schema on the backend
export const signup = (newUser) => {
  return request.post('http://localhost:7890/api/v1/auth/signup', newUser)
    .then(res => res.body)
};

export const login = () => {

}