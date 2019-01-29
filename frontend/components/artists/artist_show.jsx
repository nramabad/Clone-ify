import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';

class ArtistShow extends React.Component {

  render(){
    debugger
    return <>
        <SideBar />
        <div className="browse-body">
          <section>
            <div className="album-content">
              <img className="artist-item" src={this.props.artist.photo_url} alt="it broke :(" />
              <div className="title">{this.props.artist.name}</div>
            </div>
            <div className="fit-songs">
              <ul className="songs">{allSongs}</ul>
            </div>
          </section>
        </div>
      </>;
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
  requestOneArtist: id => dispatch(requestOneAlbum(id))
});

export default connect(
  mapStateToProps,
  null
)(ArtistShow);
