import _ from 'lodash';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  NOVEL_UPDATE,
  NOVEL_CREATE,
  NOVELS_FETCH_SUCCESS,
  NOVELS_FETCH_LOCAL_SUCCESS,
  NOVELS_FETCH_MORE_SUCCESS,
  NOVELS_DELETE_SUCCESS
} from './types';
import { uploadImage } from './ImageActions';

export const novelUpdate = ({ prop, value }) => {
  return {
    type: NOVEL_UPDATE,
    payload: { prop, value }
  };
};

export const novelCreate = ({ name, author, description, imagePath }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    uploadImage(imagePath)
      .then(url => {
        firebase.database().ref('/novels')
          .orderByChild('index')
          .limitToLast(1)
          .once('value')
          .then((res) => {
            const latestIndex = getIndex(res.val());
            firebase.database().ref('/novels')
              .push({
                name,
                author,
                description,
                create_uid: currentUser.uid,
                uri: url,
                index: latestIndex + 1,
                totalChapters: 0
              })
              .then(() => {
                dispatch({ type: NOVEL_CREATE });
                Actions.pop();
              });
          })
          .catch(error => console.log(error));
      });
  };
};

export const novelDelete = ({ title }) => {
  return (dispatch) => {
    firebase.database().ref('/novels')
      .orderByChild('name')
      .equalTo(title)
      .once('value')
      .then(snapshot => {
        snapshot.forEach(child => {
          child.ref.remove();
          console.log('Removed!');
        });

        dispatch({ type: NOVELS_DELETE_SUCCESS });
        Actions.pop();
      });
  };
};

const getIndex = (snapshot) => {
  const arrayData = [];
  _.each(snapshot, (childSnapshot) => {
    arrayData.push(childSnapshot);
  });
  return arrayData[0].index;
};

export const novelsFetch = ({ indexPage = 1 }) => {
  const pageSize = 4;
  const startAt = indexPage === 0 ? 1 : (pageSize * indexPage) + 1;
  return (dispatch) => {
    firebase.database().ref('/novels')
      .orderByChild('index')
      .limitToFirst(pageSize)
      .startAt(startAt)
      .on('value', snapshot => {
        dispatch({
          type: NOVELS_FETCH_SUCCESS,
          payload: [
            { prop: 'novels', value: snapshot.val() },
            { prop: 'indexPage', value: indexPage }
          ]
        });
      });
  };
};

export const novelsFetchMore = ({ indexPage = 0 }) => {
  const nextPage = indexPage + 1;
  const pageSize = 4;
  const startAt = nextPage === 0 ? 1 : (pageSize * nextPage) + 1;
  return (dispatch) => {
    firebase.database().ref('/novels')
      .orderByChild('index')
      .limitToFirst(pageSize)
      .startAt(startAt)
      .on('value', snapshot => {
        dispatch({
          type: NOVELS_FETCH_MORE_SUCCESS,
          payload: [
            { prop: 'novelsMore', value: snapshot.val() },
            { prop: 'indexPage', value: nextPage }
          ]
        });
      });
  };
};

export const novelsFetchLocal = (results) => {
  return (dispatch) => {
    dispatch({
      type: NOVELS_FETCH_LOCAL_SUCCESS,
      payload: { prop: 'novelsLocal', value: results }
    });
  };
};
