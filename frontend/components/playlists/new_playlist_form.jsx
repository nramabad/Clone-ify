import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createPlaylist } from '../../actions/music_actions';

class NewPlaylistForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      user_id: this.props.currentUserId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createPlaylist(this.state);
    this.props.closeModal();
  }

  handleChange() {
    return e => {
      this.setState({title: e.target.value});
    }
  }

  render() {

    return <div className="playlist-form">
        <button className="x-btn button-strip" onClick={this.props.closeModal}>
          ╳
        </button>

        <h1 className="playlist-form-header">Create new playlist</h1>

        <form className="playlist-name-field">
          <div className="input-box">
            <div className="content-spacing">
              <h4 className="input-box-label">Playlist Name</h4>
              <input type="text" className="input-box-input" placeholder="Start typing..." onChange={this.handleChange()} />
            </div>
          </div>
        </form>

        <div className="playlist-btns">
          <button onClick={this.props.closeModal} className="black-button">
            CANCEL
          </button>
          <button className="green-button" onClick={this.handleSubmit}>
            CREATE
          </button>
        </div>
      </div>;
  }

}

export default NewPlaylistForm;
