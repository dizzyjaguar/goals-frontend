const request = require('superagent');

export const postInsightRequest = (insight) => {
  return request.post(`${process.env.REACT_APP_API_URL}/insights`, insight)
  .withCredentials()
    .then(res => res.body)
};

