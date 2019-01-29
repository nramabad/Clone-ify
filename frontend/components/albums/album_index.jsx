import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import Library from '../main/library';
import CoverItem from './cover_item';
import { requestAllAlbums } from '../../actions/music_actions';

class AlbumIndex extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.requestAllAlbums();
  }

  render() {
    const allAlbums = this.props.albums.map((item, idx) => (
      <CoverItem key={item.id} item={item} />
    ));
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
    requestAllAlbums: () => dispatch(requestAllAlbums())
  });

  export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex));
