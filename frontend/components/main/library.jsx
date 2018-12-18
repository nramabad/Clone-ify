import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

class Library extends React.Component {

  render(){
    return(
      <>
        <header>
          <Link to="/collection/playlists"><span className='selected'> PLAYLIST </span></Link>
          <Link to="/collection/playlists"><span> MADE FOR YOU </span></Link>
          <Link to="/collection/songs"><span> SONGS </span></Link>
          <Link to="/collection/albums"><span> ALBUMS </span></Link>
          <Link to="/collection/artists"><span> ARTISTS </span></Link>
          <Link to="/collection/playlists"><span> PODCASTS </span></Link>
        </header>
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
});

export default withRouter(connect(
  mapStateToProps,
  null
)(Library));
