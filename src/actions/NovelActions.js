import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  NOVEL_UPDATE,
  NOVEL_CREATE,
  NOVELS_FETCH_SUCCESS
} from './types';
import { uploadImage } from './ImageActions';

export const novelUpdate = ({ prop, value }) => {
  return {
    type: NOVEL_UPDATE,
    payload: { prop, value }
  };
};

export const novelCreate = ({ name, title, description, imagePath }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    uploadImage(imagePath)
      .then(url => {
        firebase.database().ref('/novels')
          .push({ name, title, description, create_uid: currentUser.uid, uri: url })
          .then(() => {
            dispatch({ type: NOVEL_CREATE });
            Actions.pop();
          });
      })
      .catch(error => console.log(error));
  };
};

export const novelsFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/novels')
      .on('value', snapshot => {
        dispatch({ type: NOVELS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
