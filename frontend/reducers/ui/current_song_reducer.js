import { SET_CURRENT_SONG } from '../../actions/player_actions';

const currentSongReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_CURRENT_SONG:
      return action.song
    default:
      return state;
  }
}

export default currentSongReducer;
