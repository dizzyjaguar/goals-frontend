import request from 'superagent';
//consider adding in Email field in the User schema on the backend
export const signupRequest = (newUser) => {
  return request.post('http://localhost:7890/api/v1/auth/signup', newUser)
    .then(res => res.body)
};

export const loginRequest = (user) => {
  return request.post('http://localhost:7890/api/v1/auth/login', user)
  .withCredentials()
    .then(res => res.body)
};

export const verifyRequest = () => {
  return request.get('http://localhost:7890/api/v1/auth/verify')
  .withCredentials()
    .then(res => res.body)
};

// export const verifyRequest = () => {
//   return fetch('http://localhost:7890/api/v1/auth/verify', {
//     method: 'GET',
//     credentials: 'include'
//   })
//     .then(res => Promise.all([res.ok, res.json()]))
//     .then(([ok, json]) => {
//       if(!ok) throw json;
//       return json;
//     });
// };



export const logoutRequest = () => {
  return request.get('http://localhost:7890/api/v1/auth/logout')
    .then(res => res.body)
};