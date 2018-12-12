import React from 'react';
import ReactDOM from 'react-dom';

import {login, signup, logout} from './util/session_api_utils'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  window.login = login;
  window.signup = signup;
  window.logout = logout;
  ReactDOM.render(<h1>Welcome to Clone-ify!</h1>, root);
});
