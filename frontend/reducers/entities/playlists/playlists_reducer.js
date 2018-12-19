import { RECEIVE_ONE_PLAYLIST, RECEIVE_ALL_PLAYLISTS, REMOVE_ONE_PLAYLIST} from '../../../actions/music_actions';

const playlistsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ONE_PLAYLIST:
      return { [action.payload.playlist.id]: action.payload.playlist };
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists
    case REMOVE_ONE_PLAYLIST:
      let newState = Object.assign({}, state);
      delete newState[action.playlist.id];
      return newState;
    default:
      return state;
  }
}

export default playlistsReducer;
