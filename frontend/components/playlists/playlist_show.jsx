import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import SongItem from '../songs/song_item'
import { playlistSongsSelector } from '../../reducers/entities/selectors'
import {
  requestAllPlaylists, requestOnePlaylist,
  removeSongFromPlaylist,
  deletePlaylist
} from "../../actions/music_actions";

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openMenu: null
    }
    window.addEventListener('click', e => {
      if (e.target.className === "dot-button") {
        console.log("do nothing here")
      } else {
        this.setState({ openMenu: null });
      }
    });
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    this.props.requestOnePlaylist(this.props.match.params.playlistId);
  }


  click(id) {
    // debugger
    this.setState({ openMenu: id})
  }
  render(){
    const allSongs = this.props.songs.map( (song, idx) =>
      <SongItem
        key={song.id}
        song={song}
        menuOpen={this.state.openMenu == song.id}
        openMenu={() => this.click(song.id)}
      /> );
    let openMain = false;

    if (!this.props.playlist || !this.props.users[this.props.playlist.user_id]) {
      return null;
    }
    return(
      <>
        <SideBar />
        <div className='browse-body'>
          <section>
            <div className='album-content'>
              <img src={this.props.playlist.cover_url || 'https://s3-us-west-1.amazonaws.com/clone-ify-public/misc/default_cover.jpg'} alt='it broke :('/>
              <div className='title'>{this.props.playlist.title}</div>
              <div className='maker'>{this.props.users[this.props.playlist.user_id].username}</div>
              <div className='maker'>{allSongs.length} SONGS</div>
              <ul id="menu">
                <li>
                  <input id="check01" type="checkbox" className="menu" />
                  <label htmlFor="check01"><img id='playlist-button' src='https://s3-us-west-1.amazonaws.com/clone-ify-public/misc/white-three-dot.png' alt='it broke :(' /></label>
                  <ul className="submenu">
                    <li><button onClick={() => this.props.deletePlaylist(this.props.playlist.id)}>Delete Playlist</button></li>
                    <li><button>Copy Link to Playlist</button></li>
                  </ul>
                </li>
              </ul> 
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
  requestAllPlaylists: payload => dispatch(requestAllPlaylists),
  requestOnePlaylist: (id) => dispatch(requestOnePlaylist(id)),
  removeSongFromPlaylist: id => dispatch(removeSongFromPlaylist),
  deletePlaylist: id => dispatch(deletePlaylist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);


