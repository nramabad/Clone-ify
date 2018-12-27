import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createPlaylist } from '../../actions/music_actions';
import NewPlaylistForm from './new_playlist_form';

const mapStateToProps = state => ({
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});


export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistForm);
