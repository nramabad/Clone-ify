import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, Route, withRouter } from 'react-router-dom';

class Home extends React.Component {

  render(){
    return(
      <>
        <div className='browse-body'>
          <header>
            <NavLink to="/browse/featured"><span className='selected'> FEATURED </span></NavLink>
            <NavLink to="/browse/featured"><span> PODCASTS </span></NavLink>
            <NavLink to="/browse/featured"><span> GENRE & MOODS </span></NavLink>
            <NavLink to="/browse/featured"><span> NEW RELEASES </span></NavLink>
            <NavLink to="/browse/featured"><span> DISCOVER </span></NavLink>
          </header>

        </div>
      </>
    );
  }

}

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
