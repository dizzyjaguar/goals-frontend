const request = require('superagent');

export const postGoalRequest = (goal) => {
  return request.post('http://localhost:7890/api/v1/goals', goal)
    .then(res => res.body)
};

export const getAllGlobalGoalsRequest = () => {
  return request.get('http://localhost:7890/api/v1/goals')
    .then(res => res.body)
};

// i need to create something on the backed that will become a route that will grab all the goals created by the user, one for all the goals the user is working on, a route for all the goals a user has completed, etc.