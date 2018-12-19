import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import SongItem from '../songs/song_item'
import { playlistSongsSelector } from '../../reducers/entities/selectors'
import { requestOnePlaylist } from '../../actions/music_actions'

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestOnePlaylist(this.props.match.params.playlistId);
  }

  render(){
    debugger
    const allSongs = this.props.songs.map( (song, idx) => <SongItem key={song.id} song={song} /> );

    if (!this.props.playlist) {
      return null;
    }

    return(
      <>
        <SideBar />
        <div className='browse-body'>
          <section>
            <div>
              <img src={this.props.playlist.cover_url} alt='it broke :('/>
              <div>{this.props.playlist.title}</div>
              <div className='maker'>{this.props.user}</div>
            </div>
            <div>
              <ul className='songs'>
                {allSongs}
              </ul>
            </div>
          </section>
        </div>
      </>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  debugger
  const playlistId = Number(ownProps.match.params.playlistId);
  return {
    user: state.entities.users[state.entities.playlists[playlistId].user_id],
    playlist: state.entities.playlists[playlistId],
    songs: Object.values(state.entities.playlistSongs)
      .filter( song => song.playlist_id == playlistId )
      .map( song => state.entities.songs[song.song_id] )
    // songs: playlistSongsSelector(state, playlistId)
  };
};

const mapDispatchToProps = dispatch => ({
  requestOnePlaylist: (id) => dispatch(requestOnePlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);
