import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import Library from '../main/library';
import { requestAllSongs } from '../../actions/music_actions';
import SongItem from './song_item';

class SongIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllSongs();
  }

  render(){
    const allSongs = this.props.songs.map( (song, idx) => <SongItem key={song.id} song={song} /> );
    return(
      <>
        <SideBar />
        <Library />
        <ul>
          {allSongs}
        </ul>
      </>
    );
  }

}

const mapStateToProps = state => {
  // debugger;
  return {
    songs: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllSongs: () => dispatch(requestAllSongs())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex));
