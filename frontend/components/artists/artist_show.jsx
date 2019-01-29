import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import { requestAllArtists, requestOneArtist } from "../../actions/music_actions";

class ArtistShow extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestOneArtist(this.props.match.params.artistId);
  }

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
  const artistId = ownProps.match.params.artistId;
  return {
    artist: state.entities.artists[artistId]
    // songs: albumSongsSelector(state, albumId)
    // // Object.values(state.entities.songs).filter( song => song.album_id == ownProps.match.params.albumId )
  };
};

const mapDispatchToProps = dispatch => ({
  requestOneArtist: id => dispatch(requestOneArtist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow);
