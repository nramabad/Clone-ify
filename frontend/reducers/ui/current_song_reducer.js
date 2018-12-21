import { SET_CURRENT_SONG } from '../../actions/player_actions';

const currentSongReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_CURRENT_SONG:
      const audio = document.getElementById("song-player");
      audio.setAttribute('src', action.song.audio_url);
      audio.play();
      return action.song
    default:
      return state;
  }
}

export default currentSongReducer;
