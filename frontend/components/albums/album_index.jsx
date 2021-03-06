import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import Library from '../main/library';
import CoverItem from './cover_item';
import { requestAllAlbums, requestSearchedAlbums } from '../../actions/music_actions';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    // debugger
    if (this.props.searchQuery != undefined) {
      // debugger
      this.props.requestSearchedAlbums(this.props.searchQuery);
    } else {
      // debugger
      this.props.requestAllAlbums();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchQuery != prevProps.searchQuery) {
      this.props.requestSearchedAlbums(this.props.searchQuery);
    }
  }

  render() {
    const allAlbums = this.props.albums.map((item, idx) => (
      <CoverItem key={item.id} item={item} />
    ));
    if (this.props.searchQuery) {
      return (
        <div className="scoot">
          <ul className="albums">{allAlbums}</ul>
        </div>
      );
    }

    return (
      <>
        <SideBar />
        <div className="browse-body">
          <Library />
          <div className="scoot">
            <ul className="albums">{allAlbums}</ul>
          </div>
        </div>
      </>
    );
  }
}

  const mapStateToProps = state => {
    // debugger
    return {
      albums: Object.values(state.entities.albums)
    };
  };

  const mapDispatchToProps = dispatch => ({ 
    requestAllAlbums: () => dispatch(requestAllAlbums()), 
    requestSearchedAlbums: search => dispatch(requestSearchedAlbums(search))
  });

  export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex));
