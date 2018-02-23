import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch((errorFail) => loginUserFail(dispatch, errorFail.message));
      });
  };
};

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

export const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
  });
};
