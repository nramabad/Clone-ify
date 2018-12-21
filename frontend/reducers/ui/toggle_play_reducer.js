import { TOGGLE_PLAY } from '../../actions/player_actions';

const togglePlayReducer = (state=false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_PLAY:
      let p;
      let audio = document.getElementById('song-player');
      console.log(state)
      if (state) {
        console.log("pausing");
         p = audio.pause();
      } else {
         p = audio.play();
      }
      if (p != undefined) {
        p.catch(() => {})
      }
      return !state
    default:
      return state;
  }
}

export default togglePlayReducer;
