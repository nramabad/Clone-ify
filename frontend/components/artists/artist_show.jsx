import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';

class ArtistShow extends React.Component {

  render(){
    return(
      <>
        <SideBar />
        <div className='browse-body'>
          <section>
            <div className='album-content'>
              <img className='artist-item' src={item.photo_url} alt='it broke :(' />
              <div className='title'>{item.name}</div>
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

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  null
)(ArtistShow);
