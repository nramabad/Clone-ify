import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deletePlaylist } from '../../actions/music_actions';
import PlaylistForm from './playlist_form';

const mapStateToProps = state => ({
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  deletePlaylist: playlist => dispatch(createPlaylist(playlist))
});


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
