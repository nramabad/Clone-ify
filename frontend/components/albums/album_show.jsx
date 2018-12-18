import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import CoverItem from './cover_item';
import SongItem from '../songs/song_item';

class AlbumShow extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    const allSongs = this.props.albums.song.map( (song, idx) => <SongItem key={song.id} song={song} /> );
    return(
      <>
        <SideBar />
        <div className='browse-body'>
          <div></div>
          <CoverItem album={}/>
          <div>
            <ul>
              {allSongs}
            </ul>
          </div>
        </div>
      </>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    albums: Object.values(state.entities.albums)
  };
};

const mapDispatchToProps = dispatch => ({
  requestOneAlbum: () => dispatch(requestOneAlbum())
});

export default connect(
  mapStateToProps,
  null
)(AlbumShow);
