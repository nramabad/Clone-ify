import { TOGGLE_PLAY } from '../../../actions/player_actions';

const togglePlayReducer = (state=false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_PLAY:
      return !state
    default:
      return state;
  }
}

export default togglePlayReducer;
