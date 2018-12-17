import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { logout } from '../../actions/session_actions';

class Account extends React.Component {

  render() {
    return(
      <div className='account-body'>
        <section>
          <div className='body-menu'>
            <img src={this.props.currentUser.avatar_url} alt='it broken :(' />
            <span>{this.props.currentUser.username}</span>
            <Link to="/" className="black-button">VIEW ACCOUNT</Link>
            <Link to="/" className="black-button">FULL WEBSITE</Link>
            <button className="black-button" onClick={this.props.logout}>LOG OUT</button>
          </div>
        </section>
      </div>
    );
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
)(Account);
