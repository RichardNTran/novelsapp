import { NOVELS_FETCH_SUCCESS, NOVELS_FETCH_LOCAL_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  novels: {},
  novelsLocal: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOVELS_FETCH_SUCCESS:
      return { ...state, 
        [action.payload.prop]: action.payload.value, 
        novelsLocal: action.payload.value };
    case NOVELS_FETCH_LOCAL_SUCCESS:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
