import { postInsightRequest, getAllInsightsRequest } from '../services/Insights/insightServices';


export const CREATE_INSIGHT = 'CREATE_INSIGHT';
export const createInsightRedux = (insight) => dispatch => {
  return postInsightRequest(insight)
    .then(res => {
      dispatch({ type: CREATE_INSIGHT, payload: res });
    });
}

export const SET_INSIGHTS = 'SET_INSIGHTS';
export const setInsightsRedux = (goal) => dispatch => {
  return getAllInsightsRequest(goal)
    .then(res => {
      dispatch({ type: SET_INSIGHTS, payload: res });
    });
}