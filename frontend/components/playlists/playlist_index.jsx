import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';
import Library from '../main/library';
import CoverItem from './cover_item'
import { requestAllPlaylists } from '../../actions/music_actions'

class PlaylistIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPlaylists();
  }

  render(){
    const allPlaylists = this.props.playlists.map( (item, idx) => {
      return(<CoverItem key={item.id} item={item} users={this.props.users} />)

   });
    return(
      <>
        <SideBar />
        <div className='browse-body'>
          <Library />
          <div className='scoot'>
            <ul className='albums'>
              {allPlaylists}
            </ul>
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
  requestAllPlaylists: () => dispatch(requestAllPlaylists())
});

export default withRouter(connect(
mapStateToProps,
mapDispatchToProps
)(PlaylistIndex));
