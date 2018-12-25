import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, Route, withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class Library extends React.Component {

  render(){
    return <>
        <div className="top-bar">
          <header>
            <Link to="/collection/playlists">
              <span className="selected"> PLAYLIST </span>
            </Link>
            <Link to="/collection/playlists">
              <span> MADE FOR YOU </span>
            </Link>
            <Link to="/collection/tracks">
              <span> SONGS </span>
            </Link>
            <Link to="/collection/albums">
              <span> ALBUMS </span>
            </Link>
            <Link to="/collection/artists">
              <span> ARTISTS </span>
            </Link>
            <Link to="/collection/playlists">
              <span> PODCASTS </span>
            </Link>
          </header>
          <div className="right-menu-space">
            <button className="green-button" onClick={() => this.props.openModal("new_playlist")}>
              NEW PLAYLIST
            </button>
          </div>
        </div>
      </>;
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
)(Library));
