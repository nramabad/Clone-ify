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
        <Link to="/browse/account">{currentUser.username}</Link>
      </>
    );

    return currentUser ? isSignedIn() : isSignedOut();
  }

  render() {


    return (
      <div className='browse'>

          <nav className='browse-nav'>
            <Link to="/browse/featured" className='logo'><img src={window.whiteLogoURL} /></Link>
            <div className="general-pages">
              <Link to="/browse/featured"><div className='selected'>Search</div></Link>
              <Link to="/browse/featured"><div>Home</div></Link>
              <Link to="/browse/featured"><div>Your Library</div></Link>
            </div>
            <div className='auth'>{this.userLoginHelper(this.props.currentUser, this.props.logout)}</div>
          </nav>



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
