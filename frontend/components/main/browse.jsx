import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/sign_up_container';
import { logout } from '../../actions/session_actions';
import { loginDemo } from '../../actions/session_actions';


class Browse extends React.Component {

  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount() {
    document.title = "Clone-ify"
  }

  demoLogin() {
    this.props.demoLogin()
  }

  userLoginHelper(currentUser, logout) {
    const isSignedOut = () => (
      <>
        <Link to="/signup">SIGN UP</Link>
        <Link to="/login">LOG IN</Link>
      </>
    );
    const isSignedIn = () => (
      <>
        Hi, {currentUser.username}!
        <button className="splash-btn" onClick={logout}>Log Out</button>
      </>
    );

    return currentUser ? isSignedIn() : isSignedOut();
  }

  render() {
    return (
      <div className='browse'>

          <nav className='browse-nav'>
            <Link to="/browse" className='logo'><img src={window.whiteLogoURL} /></Link>
            <Link to="/browse">Search</Link>
            <Link to="/browse">Your Library</Link>
            {this.userLoginHelper(this.props.currentUser, this.props.logout)}
          </nav>

          <div className='browse-body'>
            <header>
              <Link to="/browse" className="head"><span className="head"> FEATURED </span></Link>
              <Link to="/browse" className="head"><span className="head"> PODCASTS </span></Link>
              <Link to="/browse" className="head"><span className="head"> GENRE & MOODS </span></Link>
              <Link to="/browse" className="head"><span className="head"> NEW RELEASES </span></Link>
              <Link to="/browse"><span className="head"> DISCOVER </span></Link>
            </header>
          </div>

          <nav className='player'>
            <img src={window.playButton} />
          </nav>



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
  logout: () => dispatch(logout()),
  loginDemo: () => dispatch(loginDemo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
