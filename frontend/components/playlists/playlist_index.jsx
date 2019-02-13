import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import Library from '../main/library';
import CoverItem from './cover_item'
import {
  requestAllPlaylists,
  requestSearchedPlaylists
} from "../../actions/music_actions";
import Modal from '../main/modal';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    if (this.props.searchQuery != undefined) {
      this.props.requestSearchedPlaylists(this.props.searchQuery);
    } else {
      this.props.requestAllPlaylists();
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchQuery != newProps.searchQuery) {
      this.props.requestSearchedPlaylists(newProps.searchQuery);
    }
  }

  render() {
    const allPlaylists = this.props.playlists.map((item, idx) => {
      return <CoverItem key={item.id} item={item} users={this.props.users} />;
    });

    if (this.props.searchQuery) {
      return (
        <div className="scoot">
          <ul className="albums">{allPlaylists}</ul>
        </div>
      );
    }

    return (
      <>
        <SideBar />
        <div className="browse-body">
          <Library />
          <div className="scoot">
            <ul className="albums">{allPlaylists}</ul>
          </div>
        </div>
      </>
    );
  }
}

//<div><button className="session-submit">NEW PLAYLIST</button></div>

const mapStateToProps = state => {
  return {
    users: state.entities.users,
    playlists: Object.values(state.entities.playlists)
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllPlaylists: () => dispatch(requestAllPlaylists()),
  requestSearchedPlaylists: search => dispatch(requestSearchedPlaylists(search))
});

export default withRouter(connect(
mapStateToProps,
mapDispatchToProps
)(PlaylistIndex));
