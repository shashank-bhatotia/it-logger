import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;

  }
}