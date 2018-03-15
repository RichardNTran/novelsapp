import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CHAPTER_UPDATE,
  CHAPTER_CREATE,
  CHAPTERS_FETCH_SUCCESS,
  CHAPTERS_NOVEL_LOAD,
  CHAPTER_LOAD
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

export const chaptersFetch = ({ currentNovel }) => {
  return (dispatch) => {
    firebase.database().ref(`/novels/${currentNovel.uid}/chapters`)
      .on('value', snapshot => {
        dispatch({
          type: CHAPTERS_FETCH_SUCCESS,
          payload: { prop: 'chapters', value: snapshot.val() }
        });
      });
  };
};

export const loadChapterList = ({ currentNovel }) => {
  return (dispatch) => {
    dispatch({
      type: CHAPTERS_NOVEL_LOAD,
      payload: { prop: 'currentNovel', value: currentNovel }
    });
    Actions.chapterList();
  };
};

export const loadChapter = ({ novelUid, chapterIndex }) => {
  return (dispatch) => {
    const chaptersRef = firebase.database().ref(`/novels/${novelUid}/chapters/`);
    chaptersRef.orderByChild('index').equalTo(chapterIndex).on('value', snapshot => {
      dispatch({
        type: CHAPTER_LOAD,
        payload: { prop: 'chapter', value: snapshot.val() }
      });
    });
    Actions.chapterRead();
  };
};

export const nextChapter = ({ novelUid, chapterIndex }) => {
  console.log(novelUid + chapterIndex);
};

export const backChapter = ({ novelUid, chapterIndex }) => {
  console.log(novelUid, chapterIndex);
};
