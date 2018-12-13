import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';


class Browse extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Clone-ify"
  }

  userLoginHelper(currentUser, logout) {
    const isSignedOut = () => (
      <>
        <Link to="/signup" className="white-button">SIGN UP</Link>
        <Link to="/login" className="black-button">LOG IN</Link>
      </>
    );
    const isSignedIn = () => (
      <>
        {currentUser.username}
        <button className="black-button" onClick={logout}>LOG OUT</button>
      </>
    );

    return currentUser ? isSignedIn() : isSignedOut();
  }

  render() {


    return (
      <div className='browse'>

          <nav className='browse-nav'>
            <Link to="/browse" className='logo'><img src={window.whiteLogoURL} /></Link>
            <div className="general-pages">
              <Link to="/browse">Search</Link>
              <Link to="/browse">Home</Link>
              <Link to="/browse">Your Library</Link>
            </div>
            <div className='auth'>{this.userLoginHelper(this.props.currentUser, this.props.logout)}</div>
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
