import {
  NOVEL_UPDATE,
  NOVEL_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  description: '',
  uri: 'https://i.imgur.com/K3KJ3w4h.jpg',
  author: '',
  imagePath: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOVEL_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case NOVEL_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
