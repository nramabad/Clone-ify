import { RECEIVE_PLAYLIST_ERRORS } from '../../actions/music_actions';

const playlistErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLAYLIST_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default playlistErrorsReducer;
