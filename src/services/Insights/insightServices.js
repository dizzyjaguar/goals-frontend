const request = require('superagent');

export const postInsightRequest = (insight) => {
  return request.post(`${process.env.REACT_APP_API_URL}/insights`, insight)
  .withCredentials()
    .then(res => res.body)
};

export const getAllInsightsRequest = (goalId) => {
  return request.get(`${process.env.REACT_APP_API_URL}/insights/${goalId}`)
    .then(res => res.body)
};