import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { togglePlay, setCurrentSong } from '../../actions/player_actions'




class Player extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  // getInitialState() {
  //   return { playStatus: false}
  // }
  componentDidMount() {
    // this.props.togglePlay();
  }



  handleToggle() {
    this.props.togglePlay();
  }

  render() {
    // debugger
    return (
      <nav className='player'>
        <div className='center-player'>
          <audio id='song-player' src={this.props.currentSong.audio_url} autoPlay/>
          <button onClick={this.handleToggle} className='play-btn' />
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
  togglePlay: () => dispatch(togglePlay()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

//<Scrubber /><Controls />
// <audio><source src={this.props.track.source} /></audio>

//        current: 0,
        // progress: 0,
        // random: false,
        // repeat: false,
        // mute: false,
