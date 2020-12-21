import { ActionTypes } from 'config/constants';

export const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
