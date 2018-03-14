import {
  CHAPTER_UPDATE,
  CHAPTER_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  index: '',
  title: '',
  content: '',
  currentNovel: {
    name: '',
    description: '',
    uri: 'https://i.imgur.com/K3KJ3w4h.jpg',
    author: '',
    imagePath: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHAPTER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CHAPTER_CREATE:
      return {
        ...state,
        index: '',
        title: '',
        content: '',
      };
    default:
      return state;
  }
};
