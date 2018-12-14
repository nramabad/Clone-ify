import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store.js'
import {login, signup, loginDemo} from './util/session_api_util'
import {logout} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  // window.login = login;
  // window.loginDemo = loginDemo;
  // window.signup = signup;
  // window.logout = logout;
  // window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;

  ReactDOM.render(<Root store={ store }/>, root);
});
