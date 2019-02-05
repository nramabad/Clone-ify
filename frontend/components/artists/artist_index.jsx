import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import Library from '../main/library';
import CoverItem from './cover_item';
import { requestAllArtists } from '../../actions/music_actions';

class ArtistIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    if (this.props.location.pathname == "/collection/artists") {
      this.props.requestAllArtists();
    // } else if (this.props.searchTerm != undefined) {
    //   this.props.requestSearchedArtists(this.props.searchTerm)
    }

  }

  render() {
    let allArtists = <></>;
    if (this.props.artists[0] !== undefined) {
      allArtists = Object.values(this.props.artists[0]).map((item, idx) => (
        <CoverItem key={item.id} item={item} />
      ));
    }

    if (this.props.searchQuery) {
      return (
        <div className="scoot">
          <ul className="albums">{allArtists}</ul>
        </div>
      )
    }

    return (
      <>
        <SideBar />
        <div className="browse-body">
          <Library />
          <div className="scoot">
            <ul className="albums">{allArtists}</ul>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  // debugger
  return {
    artists: Object.values(state.entities.artists)
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllArtists: () => dispatch(requestAllArtists())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex));
