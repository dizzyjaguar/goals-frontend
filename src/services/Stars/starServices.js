const request = require('superagent');

export const postStarRequest = (star) => {
  return request.post(`${process.env.REACT_APP_API_URL}/stars`, star)
  .withCredentials()
    .then(res => res.body)
};

export const getAllStarsRequest = () => {
  return request.get(`${process.env.REACT_APP_API_URL}/stars`)
  .withCredentials()
    .then(res => res.body)
};

export const deleteStarRequest = (star) => {
  return request.delete(`${process.env.REACT_APP_API_URL}/stars/${star._id}`)
  .withCredentials()
    .then(res => res.body)
};

// GET ALL STARS FOR USER ROUTE SO USER CAN SEE ALL GOALS THEY STARRED