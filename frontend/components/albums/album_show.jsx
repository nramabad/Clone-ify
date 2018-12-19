import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import CoverItem from './cover_item';
import SongItem from '../songs/song_item';
import { requestAllAlbums, requestOneAlbum } from '../../actions/music_actions';

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
            <div>
              <img src={this.props.album.cover_url} alt='it broke :('/>
              <div>{this.props.album.title}</div>
              <div className='maker'>{this.props.album.artist}</div>
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
  return {
    album: state.entities.albums[ownProps.match.params.albumId],
    songs: Object.values(state.entities.songs).filter( song => song.album_id == ownProps.match.params.albumId )
  };
};

const mapDispatchToProps = dispatch => ({
  requestOneAlbum: (id) => dispatch(requestOneAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
