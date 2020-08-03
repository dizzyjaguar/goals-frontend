const request = require('superagent');

export const postStarRequest = (star) => {
  return request.post('http://localhost:7890/api/v1/stars', star)
  .withCredentials()
    .then(res => res.body)
};

export const getAllStarsRequest = () => {
  return request.get('http://localhost:7890/api/v1/stars')
  .withCredentials()
    .then(res => res.body)
};

export const deleteStarRequest = (star) => {
  return request.delete(`http://localhost:7890/api/v1/stars/${star._id}`)
  .withCredentials()
    .then(res => res.body)
};

// GET ALL STARS FOR USER ROUTE SO USER CAN SEE ALL GOALS THEY STARRED