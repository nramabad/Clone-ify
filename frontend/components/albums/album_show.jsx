import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import SideBar from '../main/side_bar';

class AlbumShow extends React.Component {

  render(){
    return(
      <>
        <SideBar />
        <div className='browse-body'>

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
)(AlbumShow);
