import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import SongItem from '../songs/song_item'
import { playlistSongsSelector } from '../../reducers/entities/selectors'
import { requestOnePlaylist, removeSongFromPlaylist } from '../../actions/music_actions'

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestOnePlaylist(this.props.match.params.playlistId);
  }

  render(){
    const allSongs = this.props.songs.map( (song, idx) => <SongItem key={song.id} song={song} /> );

    // debugger
    if (!this.props.playlist || !this.props.users[this.props.playlist.user_id]) {
      return null;
    }
    return(
      <>
        <SideBar />
        <div className='browse-body'>
          <section>
            <div className='album-content'>
              <img src={this.props.playlist.cover_url} alt='it broke :('/>
              <div className='title'>{this.props.playlist.title}</div>
              <div className='maker'>{this.props.users[this.props.playlist.user_id].username}</div>
            </div>
            <div className='fit-songs'>
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
  const playlistId = Number(ownProps.match.params.playlistId);
  return {
    playlist: state.entities.playlists[playlistId],
    users: state.entities.users,
    songs: playlistSongsSelector(state, playlistId)
  };
};

const mapDispatchToProps = dispatch => ({
  requestOnePlaylist: (id) => dispatch(requestOnePlaylist(id)),
  removeSongFromPlaylist: id => dispatch(removeSongFromPlaylist)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);
