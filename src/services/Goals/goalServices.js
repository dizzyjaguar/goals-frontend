const request = require('superagent');

export const postGoalRequest = (goal) => {
  return request.post('http://localhost:7890/api/v1/goals', goal)
    .then(res => res.body)
};

