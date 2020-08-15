import { postInsightRequest } from '../services/Insights/insightServices';


export const CREATE_INSIGHT = 'CREATE_INSIGHT';
export const createInsightRedux = (insight) => dispatch => {
  return postInsightRequest(insight)
    .then(res => {
      dispatch({ type: CREATE_INSIGHT, payload: res });
    });
}