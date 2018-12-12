import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import { logout } from '../../actions/session_actions';

const SplashOld = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalSplash = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="splash-btn" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalSplash() : sessionLinks();
}

class Splash extends React.Component {

  constructor(props) {
    super(props);
    // this.demoLogin = this.demoLogin.bind(this);
    this.helper = this.helper.bind(this);
  }

  componentDidMount() {
    document.title = "Spookify"
  }

  // demoLogin() {
  //   this.props.demoLogin()
  //     .then(() => this.helper())
  // }

}



const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashOld);
