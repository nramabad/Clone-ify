import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deletePlaylist } from '../../actions/music_actions';

class DeletePlaylistForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.deletePlaylist(this.props.playlist.id);
    this.props.closeModal();
  }

  render() {

    return <div className="playlist-form">
        <button className="x-btn button-strip" onClick={this.props.closeModal}>
          ╳
        </button>

        <h1 className="playlist-form-header">
          Do you really want to delete this playlist?
        </h1>

        <div className="playlist-btns">
          <button onClick={this.props.closeModal} className="black-button">
            CANCEL
          </button>
          <button className="green-button" onClick={this.handleSubmit}>
            DELETE
          </button>
        </div>
      </div>;
  }

}

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId]
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  deletePlaylist: playlist => dispatch(deletePlaylist(playlist))
});


export default connect(mapStateToProps, mapDispatchToProps)(DeletePlaylistForm);
