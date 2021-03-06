import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import CoverItem from './cover_item';
import SongItem from '../songs/song_item';
import { requestAllAlbums, requestOneAlbum } from '../../actions/music_actions';
import { albumSongsSelector } from '../../reducers/entities/selectors';

class AlbumShow extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestOneAlbum(this.props.match.params.albumId);
  }

  render(){
    const allSongs = this.props.songs.map( (song, idx) => <SongItem key={song.id} song={song} /> );

    if (!this.props.album) {
      return null;
    }

    return(
      <>
        <SideBar />
        <div className='browse-body'>
          <section>
            <div className='album-content'>
              <img src={this.props.album.cover_url || 'https://s3-us-west-1.amazonaws.com/clone-ify-public/misc/default_cover.jpg'} alt='it broke :('/>
              <div className='title'>{this.props.album.title}</div>
              <div className='maker'>{this.props.album.artist}</div>
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
  const albumId = ownProps.match.params.albumId;
  return {
    album: state.entities.albums[albumId],
    songs: albumSongsSelector(state, albumId)
    // Object.values(state.entities.songs).filter( song => song.album_id == ownProps.match.params.albumId )
  };
};

const mapDispatchToProps = dispatch => ({
  requestOneAlbum: (id) => dispatch(requestOneAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
