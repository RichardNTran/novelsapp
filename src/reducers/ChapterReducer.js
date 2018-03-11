import { CHAPTERS_FETCH_SUCCESS, CHAPTERS_NOVEL_LOAD } from '../actions/types';

const INITIAL_STATE = {
  chapters: {},
  currentNovel: {
    name: '',
    description: '',
    uri: 'https://i.imgur.com/K3KJ3w4h.jpg',
    author: '',
    imagePath: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHAPTERS_FETCH_SUCCESS:
      return { ...state, [action.payload.prop]: action.payload.value }
    case CHAPTERS_NOVEL_LOAD:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
}
