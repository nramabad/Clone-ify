import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import Library from '../main/library';
import { requestAllSongs, removeSongFromPlaylist, requestSearchedSongs } from '../../actions/music_actions';
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
    if (this.props.searchQuery != undefined) {
      this.props.requestSearchedSongs(this.props.searchQuery);
    } else {
      this.props.requestAllSongs();
      this.props.removeSongFromPlaylist;
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchQuery != newProps.searchQuery) {
      this.props.requestSearchedSongs(newProps.searchQuery);
    }
  }

  render(){
    const allSongs = this.props.songs.map( (song, idx) => <SongItem key={song.id} song={song} /> );

    if (this.props.searchQuery) {
      return (
        <div className='fit-songs'>
          <ul className='songs'>
            {allSongs}
          </ul>
        </div>
      )
    }

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
  requestSearchedSongs: search => dispatch(requestSearchedSongs(search))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex));
