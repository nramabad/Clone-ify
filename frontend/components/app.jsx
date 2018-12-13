import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session/splash';
import Browse from './main/browse';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/sign_up_container'

const App = () => (
  <div>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path="/browse" component={Browse} />
    <Route exact path="/" component={Splash} />
  </div>
);

export default App;
