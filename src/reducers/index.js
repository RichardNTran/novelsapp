import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NovelFormReducer from './NovelFormReducer';
import NovelReducer from './NovelReducer';
import ChapterFormReducer from './ChapterFormReducer';
import ChapterReducer from './ChapterReducer';

export default combineReducers({
  auth: AuthReducer,
  novelForm: NovelFormReducer,
  listData: NovelReducer,
  chapterForm: ChapterFormReducer,
  chapterList: ChapterReducer
}); 
