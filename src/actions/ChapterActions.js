import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CHAPTER_UPDATE,
  CHAPTER_CREATE
} from './types';

export const chapterUpdate = ({ prop, value }) => {
  return {
    type: CHAPTER_UPDATE,
    payload: { prop, value }
  };
};

export const chapterCreate = ({ index, title, content, currentNovel }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/novels/${currentNovel.uid}/chapters`)
      .push({ index, title, content, create_uid: currentUser.uid })
      .then(() => {
        dispatch({ type: CHAPTER_CREATE });
        Actions.pop({ refresh: { chapterForm: { currentNovel } } });
      });
  };
};
