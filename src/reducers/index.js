import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NovelFormReducer from './NovelFormReducer';
import NovelReducer from './NovelReducer';

export default combineReducers({
  auth: AuthReducer,
  novelForm: NovelFormReducer,
  listData: NovelReducer
}); 
