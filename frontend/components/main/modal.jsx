import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NewPlaylistContainer from '../playlists/new_playlist_container';
import DeletePlaylistContainer from '../playlists/delete_playlist_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'new_playlist':
      component = <NewPlaylistContainer />;
      break;
    // case 'add_song_to_playlist':
    //   component = <AddSongToPlaylist />;
    //   break;
    case 'delete_playlist':
      component = <DeletePlaylistContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modalOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
