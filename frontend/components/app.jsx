import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Splash from './session/splash';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/sign_up_container'

const App = () => (
  <div>
    <Route exact path="/" component={Splash} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <footer>
      <Splash />
    </footer>
  </div>
);

export default App;
