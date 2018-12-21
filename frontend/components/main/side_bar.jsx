import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import Player from './player';
// import { logout } from '../../actions/session_actions';


class SideBar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Clone-ify"
  }

  userLoginHelper(currentUser) {
    const isSignedOut = () => (
      <div className='not-auth'>
        <Link to="/signup" className="white-button">SIGN UP</Link>
        <Link to="/login" className="black-button">LOG IN</Link>
      </div>
    );
    const isSignedIn = () => (
      <div className='auth'>
        <Link to="/settings/account"><div className="pic-n-name"><div><img src={currentUser.avatar_url} alt='🐶' /></div><div className='username'>{currentUser.username}</div></div></Link>
      </div>
    );

    return currentUser ? isSignedIn() : isSignedOut();
  }

  render() {


    return (
      <div className='browse'>

          <nav className='browse-nav'>
            <Link to="/browse/featured" className='logo'><img src={window.whiteLogoURL} /></Link>
            <div className="general-pages">
              <Link to="/browse/featured"><div>Search</div></Link>
              <Link to="/browse/featured"><div>Home</div></Link>
              <Link to="/collection/playlists"><div className='selected'>Your Library</div></Link>
            </div>
            {this.userLoginHelper(this.props.currentUser)}
          </nav>




      </div>
    )
  }

}




const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mapDispatchToProps = dispatch => ({
  loginDemo: () => dispatch(loginDemo())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar));
