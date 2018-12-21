import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import { togglePlay, setCurrentSong } from '../../actions/player_actions'

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.status = this.props.isPlaying;
  }

  // getInitialState() {
  //   return { playStatus: false}
  // }
  componentDidMount() {
    // this.props.togglePlay();
  }



  toggle(event) {
    let audio = document.getElementById('song-player');
    this.status ? audio.pause() : audio.play();
    this.status = !this.status

  }

  render() {
    return (
      <nav className='player'>
        <div className='center-player'>
          <audio id='song-player' src={this.props.currentSong.audio_url}/>
          <button onClick={this.toggle} className='play-btn' />
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
