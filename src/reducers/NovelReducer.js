import {
  NOVELS_FETCH_SUCCESS,
  NOVELS_FETCH_LOCAL_SUCCESS,
  NOVELS_FETCH_MORE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  novels: {},
  novelsLocal: null,
  indexPage: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOVELS_FETCH_SUCCESS:
      return {
        ...state,
        [action.payload[0].prop]: action.payload[0].value,
        [action.payload[1].prop]: action.payload[1].value
      };
    case NOVELS_FETCH_MORE_SUCCESS:
      {
        if (action.payload[0].value !== null) {
          const newNovels = Object.assign({}, state.novels, action.payload[0].value);
          return {
            ...state,
            novels: newNovels,
            [action.payload[1].prop]: action.payload[1].value
          };
        }
        return state;
      }
    case NOVELS_FETCH_LOCAL_SUCCESS:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
