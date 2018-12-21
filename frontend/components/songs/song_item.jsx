import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { removeSongFromPlaylist } from '../../actions/music_actions'
import { getPlaylistSongSelector } from '../../reducers/entities/selectors'


class SongItem extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    // debugger
    return (
      <li className='one-song'>
        <div className='song-item'>
          <div className="music-icon"></div>
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
              <li><Link to="/browse/featured" >Play</Link></li>
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
  removeSongFromPlaylist: (id) => dispatch(removeSongFromPlaylist(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongItem));
//onClick={this.props.removeSongFromPlaylist(this.props.song.id)}
