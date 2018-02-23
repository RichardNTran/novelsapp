import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA5WNloBwgNtZ5-QyNwKDzf6lLfZJqjHMU',
      authDomain: 'manager-53f51.firebaseapp.com',
      databaseURL: 'https://manager-53f51.firebaseio.com',
      storageBucket: 'manager-53f51.appspot.com',
      projectId: 'manager-53f51',
      messagingSenderId: '317182411703'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
