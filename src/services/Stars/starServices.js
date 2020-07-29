const request = require('superagent');

export const postStarRequest = (star) => {
  return request.post('http://localhost:7890/api/v1/stars', star)
    .then(res => res.body)
};

export const getAllStars = () => {
  return request.get('http://localhost:7890/api/v1/stars')
    .then(res => res.body)
};

// GET ALL STARS FOR USER ROUTE SO USER CAN SEE ALL GOALS THEY STARRED