import { ActionTypes } from 'config/constants';

export const initialState = {
  show: false,
  body: null,
  customProps: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        ...state,
        show: true,
        body: action.payload.body,
        customProps: action.payload.customProps,
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        show: false,
        body: null,
        customProps: {},
      };
    default:
      return state;
  }
};
