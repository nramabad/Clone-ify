import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './sign_up_container';
import { logout } from '../../actions/session_actions';
import { loginDemo } from '../../actions/session_actions';

const UserSignInHelper = (currentUser, logout ) => {
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
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount() {
    document.title = "Clone-ify"
  }

  demoLogin() {
    this.props.demoLogin();
  }

  render() {
    return <div>
        <header className="header">
          <nav className="nav-bar">
            <div className="splash-logo">
              <Link to="/" className="logo">
                <img src={window.whiteLogoURL} />
              </Link>
              <h1 className="header-logo">Clone-ify</h1>
            </div>
            <ul className="header-list">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="main-content">
          <h1>Music for everyone.</h1>
          <h3>Millions of songs. No credit card needed.</h3>
          <Link to="/login">GET CLONE-IFY FREE</Link>
        </section>

        <footer className="footer">
          <div className="footer-logo">
            <i className="fab fa-spotify" />
            <h1 className="header-logo">Clone-ify</h1>
          </div>

          <div className="footer-links">
            <h5>LINKS</h5>
              <li>
                <a href="https://github.com/nramabad" target="_blank">
                  <img src="https://s3-us-west-1.amazonaws.com/clone-ify-public/misc/github-icon.png" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nramabad/" target="_blank">
                  <img src="https://s3-us-west-1.amazonaws.com/clone-ify-public/misc/linkedin-icon.png" />
                </a>
              </li>
          </div>
        </footer>
      </div>;
  }

}



const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({

  logout: () => dispatch(logout()),
  loginDemo: () => dispatch(loginDemo())
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
