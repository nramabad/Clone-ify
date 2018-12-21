import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

class Player extends React.Component {

  getInitialState() {
    return { playStatus: false, currentTime: 0 }
  }



  toggle() {
    let status = this.state.playStatus;
    let audio = document.getElementById('audio');
    if(status === 'play') {
      status = 'pause'; audio.play();
    } else {
      status = 'play'; audio.pause();
    }
    this.setState({ playStatus: status });
  }

  render() {
    return (
      <nav className='player'>
        <div className='center-player'>
          <button className='play-btn' />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentSong: state.ui.currentSong,
    isPlaying: state.ui.togglePlay
  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Player));

//<Scrubber /><Controls />
// <audio><source src={this.props.track.source} /></audio>

//
