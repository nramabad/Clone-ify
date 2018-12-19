import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import Library from '../main/library';
import CoverItem from './cover_item';
import { requetAllAlbums } from '../../actions/music_actions';

class AlbumIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllAlbums();
  }

  render(){
    const allAlbums = this.props.albums.map( (album, idx) => <CoverItem key={album.id} album={album} /> );
    return(
      <>
        <SideBar />
        <div className='browse-body'>
          <Library />
          <ul className='albums'>
            {allAlbums}
          </ul>
      </div>
      </>
    );
  }

  }

  const mapStateToProps = state => {
  // debugger;
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
