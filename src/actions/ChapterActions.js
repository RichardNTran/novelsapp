import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CHAPTER_UPDATE,
  CHAPTER_CREATE,
  CHAPTERS_FETCH_SUCCESS,
  CHAPTERS_NOVEL_LOAD,
  CHAPTER_LOAD,
  CHAPTER_LOAD_NEXT,
  CHAPTER_LOAD_BACK
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

export const chaptersFetch = ({ currentNovel, indexPage = 0 }) => {
  const pageSize = 10;
  const startAt = indexPage === 0 ? 1 : (pageSize * indexPage) + 1;

  return (dispatch) => {
    firebase.database().ref(`/novels/${currentNovel.uid}/chapters`)
      .orderByChild('index')
      .limitToFirst(pageSize)
      .startAt(startAt)
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

export const loadChapter = ({ novelUid, chapterIndex = 1 }) => {
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

export const nextChapter = ({ novelUid, chapterIndex = 1 }) => {
  return (dispatch) => {
    const chaptersRef = firebase.database().ref(`/novels/${novelUid}/chapters/`);
    const index = Number.parseInt(chapterIndex, 10) + 1;
    console.log(index);
    chaptersRef.orderByChild('index').equalTo(index).on('value', snapshot => {
      dispatch({
        type: CHAPTER_LOAD_NEXT,
        payload: { prop: 'chapter', value: snapshot.val() }
      });
    });
  };
};

export const backChapter = ({ novelUid, chapterIndex = 1 }) => {
  return (dispatch) => {
    const chaptersRef = firebase.database().ref(`/novels/${novelUid}/chapters/`);
    const index = Number.parseInt(chapterIndex, 10) - 1;
    chaptersRef.orderByChild('index').equalTo(index).on('value', snapshot => {
      dispatch({
        type: CHAPTER_LOAD_BACK,
        payload: { prop: 'chapter', value: snapshot.val() }
      });
    });
  };
};
