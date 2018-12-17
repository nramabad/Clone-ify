import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

class Featured extends React.Component {

  render(){
    return(
      <div className='browse-body'>
        <header>
          <Link to="/browse/featured"><span className='selected'> PLAYLIST </span></Link>
          <Link to="/browse/featured"><span> MADE FOR YOU </span></Link>
          <Link to="/browse/featured"><span> SONGS </span></Link>
          <Link to="/browse/featured"><span> ALBUMS </span></Link>
          <Link to="/browse/featured"><span> ARTISTS </span></Link>
          <Link to="/browse/featured"><span> PODCASTS </span></Link>
        </header>
      </div>
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
)(Featured);
