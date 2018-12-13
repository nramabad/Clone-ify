import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_utiL'
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './sign_up_container'
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
  }

  componentDidMount() {
    document.title = "Clone-ify"
  }

  // demoLogin() {
  //   this.props.demoLogin()
  //     .then(() => this.helper())
  // }

  render() {
    return (
      <div className='splash'>

          <div className='splash-nav'>
            <a href="/#/" className='splash-logo'> Clone-ify </a>
            <a href="https://github.com/nramabad"> GitHub </a>
            <a href="https://www.linkedin.com/in/nramabad/"> LinkedIn </a>
            <Link to="/signup"> Sign Up </Link>
            <Link to="/login"> Login </Link>
          </div>

          <div className='splash-img'>
            <h3>Music for everyone.</h3>
            <h1>Millions of songs. No credit card needed.</h1>
            <br></br>
            <br></br>
            <Link className='splash-button' to="/signup"> GET CLONE-IFY FREE </Link>

          </div>

      </div>
    )
  }

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
)(Splash);
