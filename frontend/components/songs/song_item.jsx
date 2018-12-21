import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { removeSongFromPlaylist } from '../../actions/music_actions'
import { getPlaylistSongSelector } from '../../reducers/entities/selectors'
import { togglePlay, setCurrentSong, setQueue } from '../../actions/player_actions'


class SongItem extends React.Component {

  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }


  handlePlay() {
    this.props.togglePlay();
    if (!(this.props.song.id === this.props.currentSong.id && this.props.isPlaying)) {
      this.props.setCurrentSong(this.props.song);
      this.props.setQueue(this.props.queue);
    }
  }



  // getInitialState() {
  //   return { playStatus: false}
  // }
  componentDidMount() {
  }


  showAudioButton() {
    if (this.props.song.id === this.props.currentSong.id && this.props.isPlaying) {
      return (<button onClick={this.handlePlay} className='paused-song' />)
    }
    return (<button onClick={this.handlePlay} className="music-icon" />)
  }



  // toggle() {
  //   // this.props.togglePlay();
  //   // this.props.setCurrentSong(this.props.song);
  //   let audio = document.getElementById('song-player');
  //   audio.setAttribute("src", this.props.song.audio_url)
  //   this.status ? audio.pause() : audio.play();
  //   this.status = !this.status
  // }

  render () {

    if (!this.props.song) {
      return null;
    }
    // debugger
    return (
      <li className='one-song'>
        <div className='song-item'>
          {this.showAudioButton()}
          <div className='left'>
            {this.props.song.title}
            <div>
              {this.props.song.artist_name} ∙ {this.props.song.album_title}
            </div>
          </div>
        </div>
        <div className='right'>
          <div>
            <div className='dot-button' onClick={this.props.openMenu || null}></div>
            <ul className={`submenu${"-"+(this.props.menuOpen || false) || ""}`}>
              <li><button onClick={this.handlePlay} >Play</button></li>
              <li><Link to="/browse/featured" >Add to Playlist</Link></li>
              <li><button onClick={() => this.props.removeSongFromPlaylist(this.props.playlistSong.id)}>Remove from Playlist</button></li>
            </ul>
          </div>
          <div className='duration'>
            {Math.floor(this.props.song.duration/60)}:{this.props.song.duration % 60 < 10 ? `0${this.props.song.duration % 60}` : this.props.song.duration % 60}
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const playlistId = parseInt(ownProps.match.params.playlistId);
  const songId = ownProps.song.id;
  return ({
    playlistSong: getPlaylistSongSelector(state, songId, playlistId),
    isPlaying: state.ui.togglePlay,
    currentSong: state.ui.currentSong
  });
}

const mapDispatchToProps = dispatch => ({
  togglePlay: () => dispatch(togglePlay()),
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  setQueue: (queue) => (dispatch(setQueue(queue))),
  removeSongFromPlaylist: (id) => dispatch(removeSongFromPlaylist(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongItem));
//onClick={this.props.removeSongFromPlaylist(this.props.song.id)}
