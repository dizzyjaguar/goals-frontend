import { SET_USER, SET_USER_LOADING } from '../actions/authActions';

const initialState = {
  user: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return {
        ...state, user: action.payload, loading: false
      }
    case SET_USER_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}