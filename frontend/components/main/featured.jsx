import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

class Featured extends React.Component {

  render(){
    return(
      <div className='browse-body'>
        <header>
          <Link to="/browse/featured" className="head"><span> FEATURED </span></Link>
          <Link to="/browse/featured" className="head"><span> PODCASTS </span></Link>
          <Link to="/browse/featured" className="head"><span> GENRE & MOODS </span></Link>
          <Link to="/browse/featured" className="head"><span> NEW RELEASES </span></Link>
          <Link to="/browse/featured" className="head"><span> DISCOVER </span></Link>
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