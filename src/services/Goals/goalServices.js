const request = require('superagent');

export const postGoalRequest = (goal) => {
  return request.post(`${process.env.REACT_APP_API_URL}/goals`, goal)
  .withCredentials()
    .then(res => res.body)
};

export const getAllGlobalGoalsRequest = () => {
  return request.get(`${process.env.REACT_APP_API_URL}/goals`)
    .then(res => res.body)
};

export const getAllGoalsByUserRequest = (user) => {
  return request.get(`${process.env.REACT_APP_API_URL}/goals/created/${user}`)
    .then(res => res.body)
};

export const getGoalByIdRequest = (_id) => {
  return request.get(`${process.env.REACT_APP_API_URL}/goals/${_id}`)
    .then(res => res.body)
};

export const completeGoalRequest = (user, goal) => {
  return request.patch(`${process.env.REACT_APP_API_URL}/user/complete/${user}`, { goal: goal })
    .then(res => res.body)
};

export const deleteGoalRequest = (goal) => {
  return request.delete(`${process.env.REACT_APP_API_URL}/goals/${goal._id}`)
  .withCredentials()
    .then(res => res.body)
};

// i need to create something on the backed that will become a route that will grab all the goals created by the user, one for all the goals the user is working on, a route for all the goals a user has completed, etc.