import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { removeSongFromPlaylist } from '../../actions/music_actions'
import { getPlaylistSongSelector } from '../../reducers/entities/selectors'
import { togglePlay, setCurrentSong } from '../../actions/player_actions'


class SongItem extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  // getInitialState() {
  //   return { playStatus: false}
  // }
  componentDidMount() {
  }



  toggle() {
    // this.props.togglePlay();
    // this.props.setCurrentSong(this.props.song);
    let audio = document.getElementById('song-player');
    audio.setAttribute("src", this.props.song.audio_url)
    this.status ? audio.pause() : audio.play();
    this.status = !this.status
  }

  render () {
    // debugger
    return (
      <li className='one-song'>
        <div className='song-item'>
          <button onClick={this.toggle} className="music-icon" />
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
              <li><button onClick={this.toggle} >Play</button></li>
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
    playlistSong: getPlaylistSongSelector(state, songId, playlistId)

  });
}

const mapDispatchToProps = dispatch => ({
  togglePlay: () => dispatch(togglePlay()),
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  removeSongFromPlaylist: (id) => dispatch(removeSongFromPlaylist(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongItem));
//onClick={this.props.removeSongFromPlaylist(this.props.song.id)}
