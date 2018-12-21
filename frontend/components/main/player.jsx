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
    let img = (
                <div className='player-img-empty'>
                  <img></img>
                </div>
    );
    if (Object.keys(this.props.currentSong).length != 0) {
      img = (
              <div className='player-img'>
                <Link to={`/albums/${this.props.currentSong.album_id}`}>
                  <img src={this.props.currentSong.image_url}></img>
                </Link>
              </div>
            );
    }

    return (
      <nav className='player'>

        {img}

        <div className="artist-info">
            <Link to={`/albums/${this.props.currentSong.album_id}`}>
              <h2 className="artist-song-name">{this.props.currentSong.name}</h2>
            </Link>
            <Link to={`/artists/${this.props.currentSong.artist_id}`}>
              <h3 className="artist-name">{this.props.currentSong.artist_name}</h3>
            </Link>
        </div>

        <div className='center-player'>
          <audio id='song-player' src={this.props.currentSong.audio_url} autoPlay/>
          <button onClick={this.handleToggle} className='play-btn'/>
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
