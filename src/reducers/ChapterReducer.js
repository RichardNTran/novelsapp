import {
  CHAPTERS_FETCH_SUCCESS,
  CHAPTERS_NOVEL_LOAD,
  CHAPTER_LOAD,
  CHAPTER_LOAD_BACK,
  CHAPTER_LOAD_NEXT
} from '../actions/types';

const INITIAL_STATE = {
  chapters: {},
  chapter: {},
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
    case CHAPTERS_FETCH_SUCCESS:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CHAPTERS_NOVEL_LOAD:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CHAPTER_LOAD:
    case CHAPTER_LOAD_BACK:
    case CHAPTER_LOAD_NEXT:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
