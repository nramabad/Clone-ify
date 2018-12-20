import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import Library from '../main/library';
import { requestAllSongs, removeSongFromPlaylist } from '../../actions/music_actions';
import SongItem from './song_item';

class SongIndex extends React.Component {

  constructor(props) {
    super(props)
    window.addEventListener('scroll', () => {
    	const { innerHeight } = window;
    	const { scrollTop, offsetHeight } = document.documentElement;

    	const isBottom = (innerHeight + scrollTop) > (offsetHeight - 5);

    	if (isBottom) {
    		//do cool things like fecth more songs/pics
    	}
    });
  }

  componentDidMount() {
    this.props.requestAllSongs();
    this.props.removeSongFromPlaylist
  }

  render(){
    const allSongs = this.props.songs.map( (song, idx) => <SongItem key={song.id} song={song} /> );
    return(
      <>
        <SideBar />
        <div className='browse-body'>
          <Library />
          <div className='fit-songs'>
            <ul className='songs'>
              {allSongs}
            </ul>
          </div>
        </div>
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
  requestAllSongs: () => dispatch(requestAllSongs()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex));
