import { SET_CURRENT_SONG } from '../../actions/player_actions';

const currentSongReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_CURRENT_SONG:
      const audio = document.getElementById("song-player");
      // audio.pause();
      if (audio.getAttribute('src') != action.song.audio_url) {
        audio.setAttribute('src', action.song.audio_url);
      // audio.play();
      } else  {
        audio.paused ? audio.play() : audio.pause();
      };
      return action.song
    default:
      return state;
  }
}

export default currentSongReducer;
