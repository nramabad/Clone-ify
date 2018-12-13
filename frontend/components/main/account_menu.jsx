import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

class Account extends React.Component {

  render() {
    return(
      <div className='account-body'>
        <section>
          <span>{this.props.currentUser.username}</span>
          <Link to="/" className="black-button">VIEW ACCOUNT</Link>
          <Link to="/" className="black-button">FULL WEBSITE</Link>
          <button className="black-button" onClick={logout}>LOG OUT</button>
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
